const { getBlock } = require('../web3/web3');

module.exports = (req, res) => {
    const blockNum = req.body.blockNum;
    getBlock(blockNum).then((accounts) => {
        res.send(accounts);
    })
};