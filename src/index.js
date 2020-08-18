const { exec } = require("child_process");

(async () => {
  try {
    exec(
      `tippecanoe-decode /root/repos/fans_club/mbTiles/0.mbtiles 0 0 0`,
      { maxBuffer: 1024 * 10000 },
      async (error, stdout, stderr) => {
        if (error) console.log(error);
        const obj = await JSON.parse(stdout);
        console.log(Object.keys(stdout));
        console.log(stderr);
      }
    );
  } catch (error) {
    console.log(error);
  }
})();
