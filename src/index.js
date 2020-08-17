new MBTiles("./mbTiles/0.mbtiles", (err, mbtiles) => {
  mbtilesgetInfo(function (err, info) {
    console.log(info); // info
  });
});
