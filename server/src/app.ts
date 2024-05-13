import { Application } from "express";

import { IRequest } from "./types/session";
import bodyParser from "body-parser";
import path from "path";

export default function urlHandler(app: Application) {
  app.get("/", (req: IRequest, res) => {
    if (req.session.loggedIn) res.redirect("/dashboard");
    else res.sendFile("home.html", { root: path.join(__dirname, "public") });
  });

  app.get("/dashboard", (req: IRequest, res) => {
    if (req.session.loggedIn) {
      res.setHeader("Content-Type", "text/html");
      res.write(`Welcome ${req.session.username} to your dashboard`);
      res.write('<a href="/logout">Logout</a>');
      res.end();
    } else {
      res.redirect("/login");
    }
  });

  app.get("/login", (req: IRequest, res) => {
    res.sendFile("login.html", { root: path.join(__dirname, "public") });
  });

  app.post(
    "/authenticate",
    bodyParser.urlencoded(),
    (req: IRequest, res, next) => {
      // Actual implementation would check values in a database
      if (req.body.username === "foo" && req.body.password === "bar") {
        res.locals.username = req.body.username;
        next();
      } else {
        res.sendStatus(401);
      }
    },
    (req: IRequest, res) => {
      req.session.loggedIn = true;
      req.session.username = res.locals.username;
      console.log(req.session);
      res.redirect("/dashboard");
    },
  );

  app.get("/logout", (req: IRequest, res) => {
    req.session.destroy(() => {});
    res.send("Thank you! Visit again");
  });

  return app;
}
