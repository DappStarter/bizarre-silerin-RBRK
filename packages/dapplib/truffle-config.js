require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note soap collect grace nation fortune genius'; 
let testAccounts = [
"0xee18adfa276ce321e3533b6057c7a14b9c7cd212b3c862d04936c0df09fe81fe",
"0x1ebaa05d81aea2582df9fc325ab33fbe5a16445ab77f0b46e19f50cf2528c7a5",
"0xd6cf7dcf5568f87d1dde449c8dd83db3881a2095dc503883139bd4d02b30fd76",
"0x0aeff9193d541cebaa1af84f7c5f5cb3cca9a18b69804781827243bb183f9e65",
"0x34a6161edcddfbbe47a0e0360ac73b6fe1df9dc2fd89f586fd4dbc26ee2bf4b7",
"0x92dd22173ee4e33207903f662d250317b01d70f856921adf08a4471fdf8a4eca",
"0x1e8e942007ff52f2273d882f2cfff4fdec31b207bcd78dec3e193b6dcae2a6e8",
"0xcbcf5b55bc8beeb1a3ada1a65a60d23225cc40de4f0788b0dbe1110adbf22f12",
"0xcaf094f81a279a95ee3524e706675223b1d1c259fabbc03d65772b91306d6c04",
"0xb1744c7f2a927b93ab23d84d29b884907212e04ccaad24e8e900dfddb86ce519"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

