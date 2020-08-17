const MBTiles = require("@mapbox/mbtiles");
new MBTiles("/root/repos/fans_club/mbTiles/0.mbtiles", (err, mbtiles) => {
  mbtilesgetInfo(function (err, info) {
    console.log(info); // info
  });
});
