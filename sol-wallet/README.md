# Solana Wallet and Transfer Project

This project demonstrates how to create Solana wallets, check their balance, request SOL airdrops, and transfer SOL between wallets using the Solana JavaScript API (`@solana/web3.js`).

## Prerequisites

- Node.js installed on your machine.
- An understanding of JavaScript and the Solana blockchain.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd sol-wallet
    ```

3. Install the required dependencies:

    ```bash
    npm install @solana/web3.js
    ```

## Project Structure

- **`wallet.js`**: Handles wallet creation, balance checking, and requesting an airdrop of SOL.
- **`transfer.js`**: Handles transferring SOL between wallets and utilizes functions defined in `wallet.js`.

## Usage

### 1. Check Wallet Balances and Airdrop SOL

- `wallet.js` is responsible for generating wallets, checking their balances, and requesting an airdrop of SOL.

### 2. Transfer SOL Between Wallets

- `transfer.js` performs the following operations:
  1. Checks the initial balances of two wallets.
  2. Requests an airdrop for one wallet.
  3. Transfers 1 SOL from one wallet to another.
  4. Displays the final balances of both wallets.

### Steps to Run the Code

1. **Run `transfer.js`** to execute the complete workflow:

    ```bash
    node transfer.js
    ```

   This script will:
   - Display the initial balances of both wallets.
   - Request an airdrop of 2 SOL for the first wallet.
   - Transfer 1 SOL from the first wallet to the second wallet.
   - Display the updated balances after the transfer.

### Example Output

```bash
Initial Wallet Balances:
Wallet balance of Wallet 1 is 0 SOL
Wallet balance of Wallet 2 is 0 SOL
Requesting Airdrop for Wallet 1...
Airdrop of 2 SOL completed!

Balances after Airdrop:
Wallet balance of Wallet 1 is 2 SOL
Wallet balance of Wallet 2 is 0 SOL
Transferring 1 SOL from Wallet 1 to Wallet 2...
Transferred 1 SOL from <Wallet1_Public_Key> to <Wallet2_Public_Key>

Final Wallet Balances:
Wallet balance of Wallet 1 is 1 SOL
Wallet balance of Wallet 2 is 1 SOL
