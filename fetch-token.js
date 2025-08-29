const core = import('@actions/core');
async function getIDTokenAction() {
   const id_token1 = await core.getIDToken();
   return id_token1;
}
let whatever = await getIDTokenAction();
console.log(whatever);