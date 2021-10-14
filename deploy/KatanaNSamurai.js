const { ethers } = require("hardhat");

const NFT = artifacts.require("KatanaNSamurai");

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) => {
  const {deploy, all} = deployments;
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  console.log("");
  console.log("Deployer: ", deployer.address);

  nft = await deploy('KatanaNSamurai', {
    contract: "KatanaNSamurai",
    from: deployer.address,
    args: [
    ],
  });

  console.log("KatanaNSamurai address: ", nft.address);
};

module.exports.tags = ['KatanaNSamurai'];