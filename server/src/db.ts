import mysql from "mysql2/promise";

const db_info = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "react_node_board",
};

class Database {
  private connection: Promise<mysql.Connection>;

  constructor() {
    this.connection = mysql.createConnection(db_info);
    this.connect();
  }

  private async connect() {
    return (await this.connection).connect();
  }
}

export default Database;
