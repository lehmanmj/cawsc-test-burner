const core = require('@actions/core');
function getIDTokenAction() {
   const id_token1 = core.getIDToken();
   return id_token1;
}
console.log(getIDTokenAction());