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

// Middleware
app.use(session(sessionOptions));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  console.log("GET /");
  res.send({ msg: "This is CORS-enabled for a Single Route" });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
