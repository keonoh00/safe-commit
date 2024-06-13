import db from "../db";

export const createPostDB = async (
  title: string,
  content: string,
  username: string,
  iframe: string,
) => {
  const createdDate = new Date().toISOString();

  const dbResponse = (await db.connection.query(
    `INSERT INTO posts (title, content, username, createdAt) VALUES ('${title}', '${content}', '${username}', '${createdDate}')`,
  )) as any;

  // const updateIframe = await db.connection.query(
  //   "UPDATE posts SET iframe=`" + iframe + "` WHERE id=" + dbResponse[0].insertId,
  // );

  // Update the iframe column with the iframe value
  // To avoid SQL throwing error due to the iframe value, we need to escape the iframe value
  // We can use mysql.escape() function to escape the iframe value
  await db.connection.query(
    "UPDATE posts SET iframe=" +
      db.connection.escape(iframe) +
      " WHERE id=" +
      dbResponse[0].insertId,
  );

  const post = await db.connection.query(`SELECT * FROM posts WHERE id=${dbResponse[0].insertId}`);

  return post[0][0];
};

export const findPostById = async (id: string) => {
  const post = await db.connection.query(`SELECT * FROM posts WHERE id=${id}`);
  return post[0][0];
};

export const getPostsByDateOrderWithLimits = async (limit: number, offset: number) => {
  const posts = await db.connection.query(
    `SELECT * FROM posts ORDER BY createdAt DESC LIMIT ${limit} OFFSET ${offset}`,
  );

  return posts[0];
};
