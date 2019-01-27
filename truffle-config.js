var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "glow impact title traffic hood velvet praise share muscle alley bless brother";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/91928d8fc6e64ba78602f274b01d9d85")
      },
      network_id: 3
    }   

  }
};
