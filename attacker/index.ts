import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = 4000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("Received a request");
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
