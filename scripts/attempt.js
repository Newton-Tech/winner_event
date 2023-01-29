const Contract_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  const contract = await ethers.getContractAt("Contract", Contract_ADDR);
  console.log("im getting ready to call  attempt function");
  //   const contract = await Contract.deploy();

  const tx = await contract.attempt();
  await tx.wait();

  //   console.log(` Contract Deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
