async function main() {
  const Contract = await ethers.getContractFactory("Contract");
  console.log("im getting ready to deploy");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(` Contract Deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
