# TON NFT Collection

A TON blockchain NFT Collection smart contract built with Blueprint.

## Prerequisites

- **Node.js v20+** (Required for Blueprint to work correctly)
  - Check version: `node --version`
  - Switch to Node 20: `nvm use 20.19.4` (if using nvm)
- **Testnet TON tokens** for deployment

## Project Structure

-   `contracts/` - FunC smart contracts (NFT Collection & NFT Item)
-   `wrappers/` - TypeScript wrapper classes for contract interaction
-   `tests/` - Contract tests
-   `scripts/` - Deployment scripts

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Switch to Node 20+ (Important!):**
   ```bash
   nvm use 20.19.4
   ```

## Usage

### Build Contracts

```bash
npx blueprint build
```

### Run Tests

```bash
npx blueprint test
```

### Deploy to Testnet

1. **Get testnet tokens:**
   - Open Telegram: [@testgiver_ton_bot](https://t.me/testgiver_ton_bot)
   - Send your wallet address to receive 5 test TON

2. **Deploy the NFT Collection:**
   ```bash
   nvm use 20.19.4
   npx blueprint run deployTonNFT --testnet
   ```

3. **Choose your wallet:**
   - TON Connect (Tonkeeper, MyTonWallet, etc.)
   - Deep link
   - Mnemonic (requires `WALLET_MNEMONIC` and `WALLET_VERSION` env vars)

4. **Scan QR code** with your wallet and approve the transaction

### Customize Collection Metadata

Edit `scripts/deployTonNFT.ts` and update the `collectionContent.uri` with your metadata URL:

```typescript
collectionContent: {
    uri: 'https://your-domain.com/collection.json',
}
```

## Troubleshooting

### "Cannot find module 'deployTonNFT.ts'" Error

**Solution:** You're using Node 18 or lower. Switch to Node 20+:
```bash
nvm use 20.19.4
```

### "TON wallet empty" Error

**Solution:** Get testnet tokens from [@testgiver_ton_bot](https://t.me/testgiver_ton_bot)

## Contract Features

- ✅ NFT Collection deployment
- ✅ NFT minting functionality
- ✅ Royalty support (5% default)
- ✅ Testnet ready

## Resources

- [TON Documentation](https://docs.ton.org/)
- [Blueprint Documentation](https://github.com/ton-org/blueprint)
- [TON NFT Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)
