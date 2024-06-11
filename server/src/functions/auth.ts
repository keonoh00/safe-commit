import { createHash } from "crypto";
import { DBTable } from "../constants/db";
import Database from "../db";
import { User } from "../types/auth";

export const getUserByUsername: (username: string) => Promise<User[]> = async (
  username: string,
) => {
  const user = await Database.query(`SELECT * FROM ${DBTable.USERS} WHERE username='${username}'`);
  return user[0] as unknown as User[];
};

export const authenticateUser = async (username: string, hashedPassword: string) => {
  const user = await getUserByUsername(username);
  const storedHashedPassword = user[0].password;
  if (user.length === 0) {
    return false;
  }
  return storedHashedPassword === hashedPassword;
};

export const createUserDB: (
  legalName: string,
  username: string,
  password: string,
) => Promise<User[]> = async (legalName: string, username: string, password: string) => {
  const passwordAfterHashing = hashPassword(password);

  await Database.query(
    `INSERT INTO ${DBTable.USERS} (username, password, legalName, isAdmin) VALUES ('${username}', '${passwordAfterHashing}' , '${legalName}', ${0})`,
  );

  return getUserByUsername(username) as unknown as User[];
};

export const hashPassword = (password: string) => {
  return createHash("sha512").update(password).digest("hex");
};
