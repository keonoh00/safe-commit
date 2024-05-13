import cors from "cors";
import express, { Application } from "express";
import session from "express-session";

const app: Application = express();
const port: number = 3001;
const sessionOptions = {
  secret: "my-secret-key",
  resave: true,
  saveUninitialized: true,
};

app.get("/", (req, res) => {
  res.send("This is the server response!");
});

// Middleware
app.use(cors());
app.use(session(sessionOptions));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
