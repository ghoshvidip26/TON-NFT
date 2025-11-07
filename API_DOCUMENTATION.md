# TON NFT API Documentation

## Setup

### Environment Variables
Create a `.env` file in the root directory with:

```env
WALLET_MNEMONIC="your 24 word mnemonic phrase here"
TON_API_KEY=your_optional_api_key_from_toncenter
```

### Install Dependencies
```bash
npm install
```

### Start Server
```bash
npm start
# or
ts-node app.ts
```

Server runs on `http://localhost:3000`

---

## API Endpoints

### 1. Deploy NFT Collection
**POST** `/upload`

Deploys a new NFT collection to the TON blockchain.

#### Request
- **Content-Type**: `multipart/form-data`
- **Body**:
  - `file`: File to upload (stored locally)

#### Response
```json
{
  "success": true,
  "address": "EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t"
}
```

#### Example (cURL)
```bash
curl -X POST http://localhost:3000/upload \
  -F "file=@/path/to/image.png"
```

---

### 2. Mint NFT
**POST** `/mint-nft`

Mints a new NFT in an existing collection.

#### Request
- **Content-Type**: `application/json`
- **Body**:
  ```json
  {
    "collectionAddress": "EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t",
    "nftMetadataUri": "https://example.com/metadata/1.json",
    "itemIndex": 0  // Optional, auto-increments if not provided
  }
  ```

#### Response
```json
{
  "success": true,
  "nftAddress": "EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi",
  "itemIndex": "0",
  "collectionAddress": "EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t"
}
```

#### Example (cURL)
```bash
curl -X POST http://localhost:3000/mint-nft \
  -H "Content-Type: application/json" \
  -d '{
    "collectionAddress": "EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t",
    "nftMetadataUri": "https://example.com/metadata/1.json"
  }'
```

#### Example (JavaScript/Fetch)
```javascript
const response = await fetch('http://localhost:3000/mint-nft', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    collectionAddress: 'EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t',
    nftMetadataUri: 'https://example.com/metadata/1.json',
    itemIndex: 0 // Optional
  })
});

const data = await response.json();
console.log(data);
```

---

## NFT Metadata Format

Your `nftMetadataUri` should point to a JSON file with the following structure:

```json
{
  "name": "NFT Name",
  "description": "NFT Description",
  "image": "https://example.com/image.png",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Rarity",
      "value": "Common"
    }
  ]
}
```

---

## Network Configuration

Currently configured for **TON Testnet**:
- Endpoint: `https://testnet.toncenter.com/api/v2/jsonRPC`

To switch to **Mainnet**, update the endpoint in `app.ts`:
```typescript
endpoint: 'https://toncenter.com/api/v2/jsonRPC'
```

---

## Error Responses

All endpoints return errors in the following format:

```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

Common HTTP status codes:
- `400` - Bad Request (missing required fields)
- `500` - Internal Server Error (blockchain transaction failed)

---

## Notes

- Each NFT mint costs approximately **0.05 TON** (gas fees)
- Collection deployment costs approximately **0.05 TON**
- Ensure your wallet has sufficient balance before minting
- Transactions may take a few seconds to confirm on the blockchain
- The `itemIndex` auto-increments if not specified
