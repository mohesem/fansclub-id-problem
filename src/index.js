const { exec } = require("child_process");
import mongoose from "mongoose";
import Geo from "./models/geoModel";

mongoose.connect("mongodb://localhost:27017/fansclub", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

console.log("start");
mongoose.connection.on("connected", async () => {
  console.log("connected to database");
  try {
    exec(
      `tippecanoe-decode /root/repos/fans_club/mbTiles/0.mbtiles 0 0 0`,
      { maxBuffer: 1024 * 10000 },
      async (error, stdout, stderr) => {
        if (error) console.log(error);
        const obj = await JSON.parse(stdout);
        console.log(obj.features[0].features.length);
        obj.features[0].features.forEach(async (el) => {
          const query = {};
          if (el.NAME_0) query.name0 = el.NAME_0;
          const res = await Geo.findOne(query).exec();
          console.log(res);
        });
        console.log(stderr);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
