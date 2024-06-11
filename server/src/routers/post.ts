import { IRequest } from "../types/session";
import { checkUserDB } from "../functions/auth";
import express, { Response } from "express";
import db from "../db";

const postRouter = express.Router();

postRouter.post("/posts", (req: IRequest, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  const user = checkUserDB(req.session.username, req.session.password);

  db.connection.query("INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)", [
    title,
    content,
    req.session.username,
  ]);
});

export default postRouter;
