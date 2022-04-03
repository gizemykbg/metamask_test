// https://eth-ropsten.alchemyapi.io/v2/6YtFqyRJIuZqjMtHaZKhrcfOZkaOCLvX

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/6YtFqyRJIuZqjMtHaZKhrcfOZkaOCLvX",
      accounts: [
        "3fc83b6f9ce2bf2ded976803d564af8ee5101ebdabc030cfd4436c89ebf38410",
      ],
    },
  },
};
