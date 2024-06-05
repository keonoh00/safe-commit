import mysql from "mysql2/promise";

class Database {
  public connection: mysql.Connection;
  private DB_INFO: object;

  constructor() {
    this.connection = null;
    this.DB_INFO = {
      host: "localhost",
      user: "root",
      password: "1234",
      database: "web_vuln",
    };
    this.connect();
  }

  private async connect() {
    this.connection = await mysql.createConnection(this.DB_INFO);
    await this.connection.connect();
  }

  public async query(sql: string) {
    const result = await this.connection.query(sql);
    return result;
  }

  public async objQuery(obj: { sql: string; values: string[] }) {
    const result = await this.connection.query(obj);
    return result;
  }

  public async close() {
    await this.connection.end();
  }
}

const db = new Database();

export default db;
