const P = require("pbf");
import geobuf from "geobuf";
import execa from "execa";
const MBTiles = require("@mapbox/mbtiles");

(async () => {
  try {
    const { stdout } = await execa(
      `tippecanoe-decode root/repos/fans_club/mbTiles/0.mbtiles 0 0 0`
    );
    console.log("stdout", stdout);
  } catch (error) {
    console.log(error);
  }
})();

// new MBTiles("/root/repos/fans_club/mbTiles/0.mbtiles", (err, mbtiles) => {
//   mbtiles.getInfo(function (err, info) {
//     console.log(info); // info
//   });
//   mbtiles.getTile(0, 0, 0, async (err, tile) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(tile);
//       // const buf = new P(tile);
//       // const dec = geobuf.decode(buf);
//       // console.log(dec);
//       try {
//         const { stdout } = await execa(
//           `tippecanoe-decode ${JSON.stringify(tile)} 0 0 0`
//         );
//         // const buf = geobuf.decode(new P(tile));
//         console.log("stdout", stdout);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   });
// });
