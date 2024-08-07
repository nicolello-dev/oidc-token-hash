const crypto = require('crypto');

if (!process || typeof process.version === 'undefined') {
  throw new TypeError('Unsupported runtime, please use Node.js');
}

const [major, minor] = process.version
  .substring(1)
  .split('.')
  .map((x) => parseInt(x, 10));
const xofOutputLength = major > 12 || (major === 12 && minor >= 8);
const shake256 = xofOutputLength && crypto.getHashes().includes('shake256');

module.exports = shake256;
