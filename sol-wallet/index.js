const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

// new wallet keypair
const wallet = new Keypair();
const publicKey = wallet.publicKey;
const secretKey = wallet.secretKey; //private key

console.log("Public Key", publicKey);
console.log("Private Key", secretKey);

// wallet balance
const getWalletBalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const walletBalance = await connection.getBalance(publicKey);
    console.log(`Wallet balance is ${walletBalance / LAMPORTS_PER_SOL} SOL`);
  } catch (err) {
    console.error("Error getting wallet balance:", err);
  }
};

//airdrop of 0.1 SOL
const airDropSol = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const fromAirDropSignature = await connection.requestAirdrop(
      publicKey,
      0.1 * LAMPORTS_PER_SOL
    );

    // Confirm transaction
    const latestBlockHash = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: fromAirDropSignature,
    });

    console.log("Airdrop of 2 SOL completed!");
  } catch (err) {
    console.error("Error during airdrop:", err);
  }
};

const main = async () => {
  console.log("Initial Wallet Balance:");
  await getWalletBalance();
  console.log("Requesting Airdrop...");
  await airDropSol();
  console.log("Updated Wallet Balance:");
  await getWalletBalance();
};

main();
