const MBTiles = require("@mapbox/mbtiles");
new MBTiles("/root/repos/fans_club/mbTiles/0.mbtiles", (err, mbtiles) => {
  mbtiles.getInfo(function (err, info) {
    console.log(info.tilestats.layers[0].attributes); // info
  });
});
