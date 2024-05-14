import express, { Response } from "express";

import { IRequest } from "./types/session";
import { checkUserDB } from "./functions/auth/auth";

const authRouter = express.Router();

authRouter.post("/login", (req: IRequest, res: Response) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({ message: "Missing username or password" });
      return;
    }
    if (req.session) {
      req.session.username = req.body.username;
      res.json({
        username: req.session.username,
        message: "OK",
      });
    } else {
      // Validate using DB
      const user = checkUserDB(req.body.username, req.body.password);
      if (user) {
        req.session.username = req.body.username;
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
