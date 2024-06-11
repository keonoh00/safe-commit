import { db } from "../db";
import { checkUserDB } from "./auth";

export const createPost = async (
  title: string,
  content: string,
  username: string,
  password: string,
) => {
  if (!title || !content) {
    throw new Error("Title and content are required.");
  }

  const user = checkUserDB(username, password);

  db.connection.query("INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)", [
    title,
    content,
    username,
  ]);
};
