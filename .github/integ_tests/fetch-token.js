import core from "@actions/core";
import fs from "fs";

async function getIDTokenAction() {
   const id_token1 = await core.getIDToken("sts.amazonaws.com");
   return id_token1;
}
let whatever = await getIDTokenAction();

fs.writeFile(".github/integ_tests/token.txt", whatever, (err) => {
  if (err) throw err;
});