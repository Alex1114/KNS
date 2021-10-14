// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const NFT = artifacts.require("KatanaNSamurai");

async function main() {


  let nftAddress = "0x1EdD2Ddfc9F81e55aB1Ec5431a77AF7d1681c725";
  let nft = await NFT.at(nftAddress);


  let tokenId = 9;

  let uri = await nft.tokenURI(tokenId);
  console.log("tokenURI: ", uri);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
