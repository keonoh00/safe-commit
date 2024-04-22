const session = require("express-session");
const express = require("express");

import { Application } from "express";
import { urlHandler } from "./src/app";

let app: Application = express();
const port: number = 3001;

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
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
  })
);

// Handle URLs
app = urlHandler(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
