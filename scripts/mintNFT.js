const hre = require("hardhat");
require('dotenv').config();

const tokenContractJSON = require("../artifacts/contracts/FuturisticCarNFT.sol/FuturisticCarNFT.json");

const tokenAddress = "0x08f76014263369A9006f48F55f141A77e7a51d0d"; // contract address
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x578879CD86e72655173acf1706cbd5d7C5D0e2aa"; // my wallet address

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  // Get the contract instance of the deployed NFT contract
  const nft = await hre.ethers.getContractAt(tokenABI, tokenAddress, deployer);

  // Array of token URIs for the NFTs to be minted
  const tokenURIs = [
    "ipfs://QmPqai4eYyafDhiBBHZeyap7Pcg5enJemYkSvmBBYA5a48",
    "ipfs://QmdZFgREcs9nioDcqEKNsv6G7DdGSDG32ZwvM9h9o4rSVM",
    "ipfs://QmdZMjPMqZ5GXpmy5vwhvekRu7iB5E1M6xmhu7kNfyezBc",
    "ipfs://QmUoEvNeK9FkrEJY4yCTby1zPNq9K1Ghx9xSXMBKqbYMcp",
    "ipfs://QmWWjjaq4dXLqWmFGGNHLtmx74eCzktYiBAfEMPn1T1CPm"
  ];

  // Array of prompts corresponding to each NFT
  const prompts = [
    "A sleek, aerodynamic futuristic car gliding through a neon-lit city at night, with transparent panels and advanced holographic displays.",
    "A futuristic off-road car designed for rugged terrains on distant planets, featuring massive wheels, advanced suspension systems, and a rugged, armored exterior.",
    "A luxurious, self-driving futuristic car with a spacious interior, filled with high-tech gadgets, reclining seats, and a panoramic glass roof showcasing a view of a utopian cityscape.",
    "A compact, eco-friendly futuristic car with a minimalist design, solar panels integrated into its body, and advanced AI capabilities for urban mobility..",
    "A high-speed futuristic race car zooming through a futuristic race track, with dynamic lighting effects, a sleek, low-profile design, and cutting-edge aerodynamics."
  ];

  // Call the contract's batch mint function with the token URIs and prompts
  await nft.mintNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
