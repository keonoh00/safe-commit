import { IRequest } from "../types/session";

import express, { Response } from "express";

import { authenticateUser } from "../functions/auth";
import { createPostDB, findPostById, getPostsByDateOrderWithLimits } from "../functions/post";
import url from "url";

const postRouter = express.Router();

postRouter.get("/", async (req: IRequest, res: Response) => {
  const url_parts = url.parse(req.url, true);
  const offset = url_parts.query.page ? parseInt(url_parts.query.page as string) * 10 : 0;
  const posts = await getPostsByDateOrderWithLimits(10, offset);

  res.send(posts);
});

postRouter.post("/create-post", async (req: IRequest, res: Response) => {
  console.log("Creating post", req.body, req.session.username, req.session.hashedPassword);
  const username = req.session.username || req.body.username;
  const hashedPassword = req.session.hashedPassword || req.body.hashedPassword;

  const isAuthenticated = await authenticateUser(username, hashedPassword);

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

postRouter.get("/:id", async (req: IRequest, res: Response) => {
  const id = req.params.id;
  const postData = await findPostById(id);

  res.send(postData);
});

export default postRouter;
