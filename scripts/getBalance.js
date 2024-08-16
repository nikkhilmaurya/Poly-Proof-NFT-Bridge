const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FuturisticCarNFT.sol/FuturisticCarNFT.json");

const tokenAddress = "0x1685E96f22032BfAd5EEA4879471054E498C2584"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x578879CD86e72655173acf1706cbd5d7C5D0e2aa";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });