//solidity is syncronous ek be bad ek chale jo
//javascrip can be asynchronous
//does not wait for things to finish executes the task irrespective of previos tasks

// synchronous [solidity]
// asynchronous [javascript]

// cooking
// Synchronous
// 1. Put popcorn in microwave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in the mircrowave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise
// Pending
// Fulfilled
// Rejected

const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  //compile in code
  //compile separately
  // yarn solcjs --bin --abi --inlude-path node_modules/ --base-path . -o . SimpleStorage.sol
  //use to deploy3333
  //http://127.0.0.1:7545
  const provider = new ethers.JsonRpcProvider("http://172.29.240.1:7545");
  const wallet = new ethers.Wallet(
    "0x98cc2e385dbf4dd558e18ca57ae2d1ef041b47b5ae8e1c4195287fcd662a270a",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait!..");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
