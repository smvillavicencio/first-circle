import express, { response } from "express";
import cors from "cors";
import axios from "axios";

import { printConsole, saveCSV, saveJSON } from "./utils.js";
const app = express();

const PORT = 8080;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const n = process.argv[3];
const format = process.argv[5];

const url = "https://bored-api.appbrewery.com/random";

const requests = Array.from({ length: n }, () => axios.get(url));

try {
  const responses = await Promise.all(requests);

  switch (format.toLowerCase()) {
    case "console":
      printConsole(responses);
      break;
    case "json":
      saveJSON(responses);
      break;
    case "csv":
      saveCSV(responses);
      break;
    default:
      break;
  }
} catch (error) {
  console.error("Error with one of the requests:", error);
}

app.get("/random", async (req, res) => {
  var ret = [];
  for (let i = 0; i < 15; i++) {
    const { data } = await axios.get(url);
    ret.push(data);
  }
  res.send(ret);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening at port ${PORT}`);
  }
});
