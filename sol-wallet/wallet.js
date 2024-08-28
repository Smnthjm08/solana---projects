// wallet.js
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");


const wallet1 = new Keypair();  // Sender 
const wallet2 = new Keypair();  // Receiver 

const publicKey1 = wallet1.publicKey;
const secretKey1 = wallet1.secretKey;
const publicKey2 = wallet2.publicKey;
const secretKey2 = wallet2.secretKey;

// get wallet balance
const getWalletBalance = async (publicKey, walletName) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance = await connection.getBalance(publicKey);
        console.log(`Wallet balance of ${walletName} is ${walletBalance / LAMPORTS_PER_SOL} SOL`);
    } catch (err) {
        console.error("Error getting wallet balance:", err);
    }
};

// request an airdrop of SOL
const airDropSol = async (publicKey) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);

        // Confirm transaction after requesting airdrop
        const latestBlockHash = await connection.getLatestBlockhash();
        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: fromAirDropSignature,
        });

        console.log('Airdrop of 2 SOL completed!');
    } catch (err) {
        if (err.message.includes("429 Too Many Requests")) {
            console.error("Rate limit exceeded for airdrop requests. Please wait 24 hours and try again.");
        } else {
            console.error("Error during airdrop:", err);
        }
    }
};

module.exports = {
    wallet1,
    wallet2,
    publicKey1,
    publicKey2,
    getWalletBalance,
    airDropSol
};
