const { getTx } = require('../web3/web3');

module.exports = (req, res) => {
    const txId = req.body.txId;
    getTx(txId).then((tx) => {
        res.send(tx);
    })
};