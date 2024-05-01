import session from "express-session";
import express, { Application } from "express";

const app: Application = express();
const port: number = 3001;

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);

app.get("/", (req, res) => {
  res.send("This is the server response!");
});

// Middleware
app.use(
  session({
    secret: "Keep it secret",
    name: "uniqueSessionID",
    saveUninitialized: false,
  }),
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on port ${port}`);
});
