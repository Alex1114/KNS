const { assert, expect } = require('chai');
const { BN, time, expectRevert, constants, balance } = require('@openzeppelin/test-helpers');
const { artifacts } = require('hardhat');

const NFT = artifacts.require("../contracts/KatanaNSamurai.sol");

describe("", function(){

  let owner;
  let user;

  let nft;

  before(async function() {
    accounts = await web3.eth.getAccounts();
    owner = accounts[1];
    user = accounts[2];
  });

  beforeEach(async function() {
    nft = await NFT.new({from: owner});
    console.log(nft.address);
  });


  describe("KatanaNSamurai mintSamurai", function() {

    it("KatanaNSamurai mintSamurai", async function(){

      await expectRevert(
        nft.mintSamurai(50, {value: 2500000000000000000}), "Error");

      // await expectRevert(
      //   nft.tokenURI(2), "ERC721Metadata: URI query for nonexistent token");

      // await nft.mintSamurai(2, {value: 100000000000000000});

      // let queriedURI = await nft.tokenURI(2);

      // assert.equal(queriedURI, uri);
      // console.log("QueriedURI: ", queriedURI);
    });

  });

});