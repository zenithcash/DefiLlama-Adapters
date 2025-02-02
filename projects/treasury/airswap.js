const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x24b4ce3ad4366b73f839c1b1fd11d1f636514534";
const treasury2 = "0x8e5a68a73470c07d043b57d0751fba8b0315c12c";
const treasury3 = "0xf8bb149f9525875fa47b8cc632d368eb600faba3";

const AST = "0x27054b13b1b798b345b591a4d22e6562d47ea75a"

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53"
     ],
    owners: [treasury, treasury2, treasury3],
    ownTokens: [AST],
  },
})