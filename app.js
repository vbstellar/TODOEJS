import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let port = 3000;

var date = new Date();
var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

var today = date.toLocaleDateString("en-US", options);

app.get("/", (req, res) => {
  res.render("list", { day: today });
});

app.listen(port, () => {
  console.log("port up and running on port " + port);
});
