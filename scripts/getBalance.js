const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FuturisticCarNFT.sol/FuturisticCarNFT.json");

const tokenAddress = "0x82d9858c509f88d7DCBde9946Fa0fD48DF162CC0"; 
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
