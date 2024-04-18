import * as express from "express";
import { Request, Response } from "express";

// create and setup express app
const app = express();
app.use(express.json());

// register routes

app.get("/", function (req: Request, res: Response) {
  // here we will have logic to return all users
});

// start express server
app.listen(3000);
