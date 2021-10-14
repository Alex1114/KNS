require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require('hardhat-deploy');
require("hardhat-gas-reporter");
require("dotenv").config();


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",

  networks:{
    hardhat: {
      accounts:{
        "mnemonic": ""
      }
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/5NJZ7GP3CDgWLbb3L0xGUzLyt938icDw",
      accounts:{
        "mnemonic": ""
      }
    }
    // mainnet: {
    //   url: process.env.ALCHEMY_API_MAINNET_KEY, 
    //   accounts:[process.env.MAINNET_PRIVATE_KEY],
    //   gas: 206511,
    //   gasPrice: 20000000000

    // }
  }
};