// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const NFT = artifacts.require("KatanaNSamurai");

async function main() {


  let nftAddress = "0x46f0bD4ef1B03ccA1a06DeB4055dB3FbfBF49177";
  let nft = await NFT.at(nftAddress);

  await nft.startSale();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });