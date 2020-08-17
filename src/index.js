const P = require("pbf");
import geobuf from "geobuf";
const MBTiles = require("@mapbox/mbtiles");

new MBTiles("/root/repos/fans_club/mbTiles/0.mbtiles", (err, mbtiles) => {
  mbtiles.getInfo(function (err, info) {
    console.log(info); // info
  });
  mbtiles.getTile(0, 0, 0, (err, tile) => {
    if (err) {
      console.log(err);
      // return cb(404, headerErr, `Tile rendering error: ${err}\n`);
    }
    {
      console.log(tile);
      var buf = geobuf.decode(new P(tile));
      console.log(buf);
    }
    //   return cb(200, header, tile);
  });
});
