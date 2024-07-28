import fs from "fs";

export const printConsole = (res) => {
  res.forEach((element) => {
    console.log(element.data);
  });
};

export const saveJSON = (res) => {
  const json = {};

  res.forEach((element, index) => {
    json[index] = element.data;
  });

  fs.writeFile("data.json", JSON.stringify(json), (err) => {
    if (err) {
      console.error(err);
      throw err;
    }

    console.log("data.json saved");
  });
};

export const saveCSV = (res) => {
  const arr = res.map((element) => element.data);

  let csv =
    Object.keys(arr[0])
      .map((val) => val)
      .join(",") + "\n";

  csv += arr.map((element) => Object.values(element).toString()).join("\n");

  fs.writeFile("data.csv", csv, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }

    console.log("data.csv saved");
  });
};
