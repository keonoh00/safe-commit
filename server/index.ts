import Database from "./src/db/sqlDB";
import authRouter from "./src/auth";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import session, { SessionOptions } from "express-session";

class Server {
  private app: Application;
  private port: number;
  private db: Database;
  private sessionOptions: SessionOptions;

  constructor() {
    this.app = express();
    // this.db = new Database();
    this.port = 3001;
    this.sessionOptions = {
      secret: "my-secret-key",
      resave: true,
      saveUninitialized: true,
    };

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      }),
    );
    this.app.use(session(this.sessionOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes() {
    this.app.use("/api/v1/auth", authRouter);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
