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

Compile the FunC smart contracts:

```bash
nvm use 20.19.4
npx blueprint build --all
```

This will:
- Compile `NFTCollection` contract
- Compile `NFTItem` contract
- Generate artifacts in `build/` directory

**Build individual contracts:**
```bash
npx blueprint build NFTCollection
# or
npx blueprint build NFTItem
```

### Run Tests

Execute the test suite to verify contract functionality:

```bash
nvm use 20.19.4
npx blueprint test
```

**Expected output:**
- ✅ NFTCollection deployment test
- ✅ Get collection data test
- ✅ Mint NFT item test
- ✅ Verify uninitialized NFT test

All tests should pass before deployment.

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

## Complete Workflow

### 1. Initial Setup
```bash
# Clone the repository
git clone https://github.com/ghoshvidip26/TON-NFT.git
cd TON-NFT

# Install dependencies
npm install

# Switch to Node 20
nvm use 20.19.4
```

### 2. Build & Test
```bash
# Build all contracts
npx blueprint build --all

# Run tests
npx blueprint test
```

### 3. Deploy to Testnet
```bash
# Get testnet tokens from @testgiver_ton_bot on Telegram

# Deploy NFT Collection
npx blueprint run deployTonNFT --testnet

# Choose wallet (TON Connect/Deep link/Mnemonic)
# Scan QR code and approve transaction
```

### 4. After Deployment
Once deployed, you can:
- Mint NFTs using the collection contract
- Transfer NFT ownership
- Query NFT data
- Set royalty parameters

## Resources

- [TON Documentation](https://docs.ton.org/)
- [Blueprint Documentation](https://github.com/ton-org/blueprint)
- [TON NFT Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)
- [Testnet Faucet](https://t.me/testgiver_ton_bot)
