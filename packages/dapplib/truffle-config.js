require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth sister proof grace option blue travel'; 
let testAccounts = [
"0x5096f86956a9c2161a8f4669dd5932a841008340c3a8e5896e4ff1d2ff399b03",
"0xaff3d9e6e188a33013e72dbe28ae3a1ffb674e330d6abb980d382028e4ca63b7",
"0xd556c5f1fc20bdbe60b9430b359f45c2e01e351b63f03565722e2bbd4cc617a1",
"0x3eafa838114d90871bf39c91d257f5f0b93a05b34b521a7882efab888f3c84c0",
"0xdee1160caf442b1d1cc786843c9026565e5b22064fe052973014b95596fb4fed",
"0xe7dc45cc168ecd241b80a9dcc6e7632e5da3d249c9db76ae121c83c0577a1b32",
"0x5c98842994cce531f2ec1dc853a3f441bdcfaed73788544143a6c12eb5d84522",
"0xd8417982b4e2a168f10d2215328059168722ed5e32b3dd0542188b6326a000cf",
"0xdabf0febd5ac9769c5806b02db56bafd0d243bd40be5be2738895774c9f87010",
"0xb25543439b7ad5b60a9aa03f2bc84b7abdf5eab64263f855520ea50c5bebfa68"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

