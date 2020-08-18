const { exec } = require("child_process");

(async () => {
  try {
    exec(
      `tippecanoe-decode /root/repos/fans_club/mbTiles/0.mbtiles 0 0 0`,
      { maxBuffer: 1024 * 1000 },
      (error, stdout, stderr) => {
        if (error) console.log(error);
        console.log(Object.keys(stdout));
        console.log(stderr);
      }
    );
  } catch (error) {
    console.log(error);
  }
})();
