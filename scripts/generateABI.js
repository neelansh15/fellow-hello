const { writeFileSync } = require("fs");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Get the contract ABI
  const abi = HelloWorld.interface.format("json");
  writeFileSync("abi/HelloWorld.json", abi);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
