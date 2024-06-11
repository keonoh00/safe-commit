import { IRequest } from "../types/session";
import { authenticateUser, createUserDB, getUserByUsername, hashPassword } from "../functions/auth";
import express, { Response } from "express";

const authRouter = express.Router();

authRouter.post("/login", async (req: IRequest, res: Response) => {
  try {
    // Check if username and password are provided
    if (!req.body.username || !req.body.password) {
      res.status(400).send({ message: "Missing username or password" });
    }

    if (req.session.username && req.session.hashedPassword) {
      if (await authenticateUser(req.session.username, req.session.hashedPassword)) {
        res.send({ message: "Already logged in" });
      }
    }

    const hashedUserInputPassword = hashPassword(req.body.password);
    const isAuthenticated = await authenticateUser(req.body.username, hashedUserInputPassword);

    if (isAuthenticated) {
      // Set the session data
      req.session.username = req.body.username;
      req.session.hashedPassword = req.body.hashedUserInputPassword;
      res.send({ message: "Logged in" });
    } else {
      res.send({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

authRouter.get("/logout", (req: IRequest, res: Response) => {
  try {
    req.session.destroy(() => {});
    res.send({ message: "Logged out" });
  } catch (error) {
    res.send(error);
  }
});

authRouter.post("/create-account", async (req: IRequest, res: Response) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.send({ message: "Missing username or password" });
      console.log("Missing username or password");
      return;
    }
    // Check if user already exists
    const userWithUsername = await getUserByUsername(req.body.username);
    if (userWithUsername.length > 0) {
      res.send({ message: "User already exists" });
      console.log("User already exists");
      return;
    }

    const createdUserResponse = await createUserDB(
      req.body.legalName,
      req.body.username,
      req.body.password,
    );
    const createdUser = createdUserResponse[0];

    res.send({
      username: createdUser.username,
      hashedPassword: createdUser.password,
    });
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send(error);
  }
});

export default authRouter;
