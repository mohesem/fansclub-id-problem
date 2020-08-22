const { exec } = require("child_process");
import mongoose from "mongoose";
import Geo from "./models/geoModel";
import { resolve } from "path";

mongoose.connect("mongodb://localhost:27017/fansclub", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const zoom = 2;
const side = zoom * 2;
// const all = side * side;
// const start = [0, 0];
let countX = 0;
let countY = 0;

const check = (z, x, y) => {
  return new Promise((resolve, reject) => {
    exec(
      `tippecanoe-decode /root/repos/fans_club/mbTiles/0.mbtiles ${z} ${x} ${y}`,
      { maxBuffer: 1024 * 10000 },
      async (error, stdout, stderr) => {
        if (error) console.log(error);
        const obj = await JSON.parse(stdout);
        console.log(obj.features[0].features.length);
        obj.features[0].features.forEach(async (el, i) => {
          // console.log(el);
          const query = {
            name0: el.NAME_0,
            name1: el.NAME_1,
            name2: el.NAME_2,
          };
          console.log(query);
          // if (el.NAME_0) query.name0 = el.NAME_0;
          const res = await Geo.findOne(query).exec();
          // console.log(res);
          console.log(res.fid, el.id);
          if (res.fid !== el.id) console.log("-----------------");

          if (i === obj.features[0].features.length - 1) {
            // console.log("done");
            resolve();
          }
        });
        console.log(stderr);
      }
    );
  });
};

console.log("start");
mongoose.connection.on("connected", async () => {
  console.log("connected to database");
  try {
    (async function loop() {
      if (countY === side - 1 && countX === side - 1) {
        console.log("done");
        return false;
      }
      await check(zoom, countX, countY);
      if (countY < side) {
        countY += 1;
      }
      if (countY === side) {
        countY = 0;
        countX += 1;
      }
      // await check();
      loop();
    })();
  } catch (error) {
    console.log(error);
  }
});
