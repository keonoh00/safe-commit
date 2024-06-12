import db from "../db";

export const createPostDB = async (
  title: string,
  content: string,
  username: string,
  iframe: string,
) => {
  const createdDate = new Date().toISOString();

  const dbResponse = (await db.connection.query(
    `INSERT INTO posts (title, content, username, iframe, createdAt) VALUES ('${title}', '${content}', '${username}', '${iframe}', '${createdDate}')`,
  )) as any;
  const post = await db.connection.query(`SELECT * FROM posts WHERE id=${dbResponse[0].insertId}`);

  return post[0][0];
};
