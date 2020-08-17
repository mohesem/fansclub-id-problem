const P = require("pbf");
import geobuf from "geobuf";
import execa from "execa";
const MBTiles = require("@mapbox/mbtiles");

new MBTiles("/root/repos/fans_club/mbTiles/0.mbtiles", (err, mbtiles) => {
  mbtiles.getInfo(function (err, info) {
    console.log(info); // info
  });
  mbtiles.getTile(0, 0, 0, async (err, tile) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tile);
      try {
        const { stdout } = await execa(`tippecanoe-decode ${tile}.pbf 0 0 0`);
        // const buf = geobuf.decode(new P(tile));
        console.log("stdout", stdout);
      } catch (error) {
        console.log(error);
      }
    }
  });
});
