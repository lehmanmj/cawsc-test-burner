const core = require('@actions/core');
async function getIDTokenAction() {
   const id_token1 = await core.getIDToken();
   return id_token1;
}
console.log(getIDTokenAction());