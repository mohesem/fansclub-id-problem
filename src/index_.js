import * as fetch from "node-fetch";
const P = require("pbf");
const execa = require("execa");
import geobuf from "geobuf";

// function readData(tag, data, pbf) {
//   console.log(tag, data, pbf);
//   if (tag === 1) data.name = pbf.readString();
//   else if (tag === 2) data.version = pbf.readVarint();
//   else if (tag === 3) data.layer = pbf.readMessage(readLayer, {});
// }
// function readLayer(tag, layer, pbf) {
//   if (tag === 1) layer.name = pbf.readString();
//   else if (tag === 3) layer.size = pbf.readVarint();
// }

(async () => {
  try {
    const res = await fetch("https://www.fansclub.app/api/v1/GET/tiles/0/0/0");
    // const json = await res.body.json();
    // console.log(res.body);
    // console.log(Object.keys(res));
    // console.log(res.body._readableState.buffer);
    // console.log(res.size);
    // var geojson = geobuf.decode(new P(res.body._readableState.buffer));
    // var data = new P(res.body._readableState.buffer);
    // var geojson = geobuf.decode(data);
    // var data = new P(res.body._readableState.buffer.head).readFields(
    //   readData,
    //   {}
    // );
    // const { stdout } = await execa(
    //   `tippecanoe-decode ${JSON.stringify(res.body._readableState.buffer.head)}`
    // );
    // console.log(stdout);
    // var data = new P(res.body._readableState);
    // var data = new P(res.body._readableState).readFields(readData, {});
    // console.log("--", JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
})();

// https://www.fansclub.app/api/v1/GET/tiles/{z}/{x}/{y}
