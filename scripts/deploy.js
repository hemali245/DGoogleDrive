const hre = require("hardhat");

async function main() {
  const uploaded = await hre.ethers.getContractFactory("upload"); 
  const upload_deploy = await uploaded.deploy(); 

  await upload_deploy.deployed();

  console.log("Library deployed to:", upload_deploy.address);
}

main().catch((error)=> {
  console.error(error);
  process.exitCode = 1;
});

//0x5FbDB2315678afecb367f032d93F642f64180aa3