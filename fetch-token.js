import core from "@actions/core";
import fs from "fs";

async function getIDTokenAction() {
   const id_token1 = await core.getIDToken("sts.amazon.com");
   return id_token1;
}
let whatever = await getIDTokenAction();

fs.writeFile("token.txt", whatever, (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});