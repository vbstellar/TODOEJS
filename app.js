import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import date from "./date.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
let port = 3000;
let items = [];
let workList = [];

app.post("/", (req, res) => {
  let item = req.body.listItem;
  if (req.body.list === "Work") {
    workList.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  let today = date();
  res.render("list", { listTitle: today, List: items });
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", List: workList });
});

app.listen(port, () => {
  console.log("port up and running on port " + port);
});
