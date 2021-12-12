import fs from "fs";

export default function fetchData(dataFileName: string) {
  try {
    const data = fs.readFileSync("data/" + dataFileName + ".json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return [];
  }
}
