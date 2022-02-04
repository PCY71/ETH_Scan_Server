const { getAccounts } = require('../web3/web3');
module.exports = (req, res) => {
    getAccounts().then((accounts) => {
        res.send(accounts);
    })
};