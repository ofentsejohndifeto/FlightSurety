var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (Ganache)
      port: 8545,            // Default Ganache port
      network_id: "*",       // Match any network id
                             // Optional: increase gas limit
    }
  },

  compilers: {
    solc: {
      version: "^0.4.24"     // Match your Solidity version
    }
  }
};
