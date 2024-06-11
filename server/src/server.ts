import Database from "./db";
import authRouter from "./routers/auth";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import session, { SessionOptions } from "express-session";
import testRouter from "./routers/test";

class Server {
  private app: Application;
  private port: number;
  private db: typeof Database;
  private sessionOptions: SessionOptions;

  constructor() {
    this.app = express();
    this.db = Database; // For initializing
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
  }

  private routes() {
    this.app.use("/api/v1/auth", authRouter);
    this.app.use("/api/v1/test", testRouter);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on port ${this.port}`);
    });
  }
}

export default Server;
