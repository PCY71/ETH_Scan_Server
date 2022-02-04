const Web3 = require('web3');

function getWeb3() {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    return web3;
}
module.exports = {

    getAccounts: async function getAccounts() {
        try {
            const accounts = await getWeb3().eth.getAccounts();
            console.log(accounts);
            return accounts;
        } catch (e) {
            console.log(e);
            return e;
        }
    },

    getBlock: async function getBlock(blockNum) {
        try {
            const block = await getWeb3().eth.getBlock(blockNum)
            console.log(block);
            return block;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
