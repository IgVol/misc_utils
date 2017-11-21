var bitcore = require('bitcore-lib');
var EthereumBip44 = require('ethereum-bip44');

const HDPrivateKey = bitcore.HDPrivateKey;
const HDPublicKey = bitcore.HDPublicKey;

var ethHdKey = new bitcore.HDPrivateKey();
var ethDerivedPrvKey = ethHdKey.derive("m/44'/60'/0'/0");
var ethDerivedPubKey = ethHdKey.derive("m/44'/60'/0'/0").hdPublicKey;
var btcHdKey = new bitcore.HDPrivateKey();
var btcPrvKey = btcHdKey.hdPrivateKey;
var btcPubKey = btcHdKey.hdPublicKey;

const realKey = new EthereumBip44.fromPrivateSeed(ethDerivedPrvKey)
const testKey = new EthereumBip44.fromPublicSeed(ethDerivedPubKey)
console.log(realKey.getAddress(0), realKey.getAddress(0))

console.log('ETH keys');
console.log(ethDerivedPrvKey);
console.log(ethDerivedPubKey);
console.log(`

==========------------------==========

`)
console.log('BTC keys');
console.log(btcHdKey);
console.log(btcPubKey);