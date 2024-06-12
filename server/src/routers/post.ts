import { IRequest } from "../types/session";

import express, { Response } from "express";

import { authenticateUser } from "../functions/auth";
import { createPostDB, findPostById } from "../functions/post";

const postRouter = express.Router();

postRouter.post("/create-post", async (req: IRequest, res: Response) => {
  console.log("Creating post", req.body, req.session.username, req.session.hashedPassword);
  const username = req.session.username || req.body.username;
  const hashedPassword = req.session.hashedPassword || req.body.hashedPassword;

  const isAuthenticated = await authenticateUser(username, hashedPassword);

  console.log("Is authenticated", username, hashedPassword, isAuthenticated);

  if (!isAuthenticated) {
    res.send({ message: "Not authenticated" });
    return;
  }

  const post = await createPostDB(
    req.body.title,
    req.body.content,
    req.body.username,
    req.body.iframe,
  );

  console.log("Post created", post);

  res.send(post);
});

postRouter.get("/posts", async (req: IRequest, res: Response) => {
  res.send("Posts");
});

postRouter.get("/:id", async (req: IRequest, res: Response) => {
  console.log("asdfasdf");
  const id = req.params.id;
  const postData = await findPostById(id);

  res.send(postData);
});

export default postRouter;
