const { exec } = require("child_process");
import mongoose from "mongoose";

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
        obj.feature[0].features.forEach((element) => {
          console.log(element);
        });
        console.log(stderr);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
