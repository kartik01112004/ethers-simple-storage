# ethers-simple-storage

change server of ganache to vEthernet(WSL) to run in wsl after doing yarn add ganache

```
use "ethers": "5.7.2",

and "fs-extra": "^11.1.1",

fs is not stable fs-extra is better
```

to run:`node deploy.js`

to compile: `yarn compile`

After downgrading ethers to 5.7.2 I got another error **TypeError: ethers.JsonRpcProvider is not a constructor ** this was resolved by adding providers to the code `const provider = new ethers.providers.JsonRpcProvider( "http://172.29.240.1:7545");`
