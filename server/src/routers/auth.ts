import { IRequest } from "../types/session";
import { checkUserDB } from "../functions/auth";
import express, { Response } from "express";

const authRouter = express.Router();

authRouter.post("/login", async (req: IRequest, res: Response) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({ message: "Missing username or password" });
      return;
    }
    if (req.session.username && req.session.username === req.body.username && req.session.isValid) {
      console.log("Session already exists");
      req.session.username = req.body.username;
      req.session.isValid = true;
      res.json({
        username: req.session.username,
        message: "OK",
      });
    } else {
      console.log("Creating new session");
      // Validate using DB
      const user = await checkUserDB(req.body.username, req.body.password);
      if (user !== undefined) {
        req.session.username = req.body.username;
        req.session.isValid = true;
        res.json({
          username: req.session.username,
          message: "OK",
        });
      } else {
        res.status(401).send({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

authRouter.get("/logout", (req: IRequest, res: Response) => {
  try {
    req.session.destroy(() => {});
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

authRouter.post("/create-account", (req: IRequest, res: Response) => {
  try {
    res.json({ message: "Account created" });
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

export default authRouter;
