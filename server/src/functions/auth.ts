import { DBTable } from "../constants/db";
import Database from "../db";

export const checkUserDB = async (username: string, password: string) => {
  return await Database.query(
    `SELECT * FROM ${DBTable.USERS} WHERE username='${username}' AND password='${password}'`,
  );
};

export const createUserDB = async (
  username: string,
  password: string,
  isAdmin: boolean = false,
) => {
  return await Database.query(
    // eslint-disable-next-line max-len
    `INSERT INTO ${DBTable.USERS} (username, password, isAdmin) VALUES ('${username}', '${password}' , '${isAdmin ? 1 : 0}')`,
  );
};

export const checkUserExistsDB = async (username: string) => {
  return await Database.query(`SELECT * FROM ${DBTable.USERS} WHERE username='${username}'`);
};

export const createAnnouncementDB = async (title: string, content: string, author: string) => {
  return await Database.query(
    `INSERT INTO ${DBTable.ANNOUNCEMENTS} (title, content, author) VALUES ('${title}', '${content}', '${author}')`,
  );
};
