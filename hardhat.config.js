/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { GOERLI_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_API_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
