require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const HARDHAT_CHAIN_ID = parseInt(process.env.HARDHAT_CHAIN_ID || '31337')
const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL || 'http://127.0.0.1:8545'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    hardhat: {
      chainId: HARDHAT_CHAIN_ID,
    },
    localhost: {
      url: LOCALHOST_RPC_URL,
    },
  },
}
