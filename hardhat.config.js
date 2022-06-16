/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { GOERLI_APY_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_APY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
