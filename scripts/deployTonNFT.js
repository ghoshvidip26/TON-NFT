const { toNano } = require('@ton/core');
const { TonNFT } = require('../wrappers/TonNFT');
const { compile } = require('@ton/blueprint');

async function run(provider) {
    const tonNFT = provider.open(TonNFT.createFromConfig({}, await compile('TonNFT')));

    await tonNFT.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(tonNFT.address);

    // run methods on `tonNFT`
}

module.exports = { run };
