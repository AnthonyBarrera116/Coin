require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  gas: 2100000,
  gasPrice: 8000000000,
  allowUnlimitedContractSize: true,
};
