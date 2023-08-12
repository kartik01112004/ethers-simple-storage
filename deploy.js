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

async function main() {
  //compile in code
  //compile separately
  // yarn solcjs --bin --abi --inlude-path node_modules/ --base-path . -o . SimpleStorage.sol
  //use to deploy3333
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
