// transfer.js
const { 
    Connection,
    clusterApiUrl,
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");
const { wallet1, wallet2, publicKey1, publicKey2, getWalletBalance, airDropSol } = require('./wallet.js');

//transfer SOL from one wallet to another
const transferSol = async (fromWallet, toPublicKey, amount) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: fromWallet.publicKey,
                toPubkey: toPublicKey,
                lamports: amount * LAMPORTS_PER_SOL, 
            })
        );

        // Sign, send and confirm the transaction
        const signature = await connection.sendTransaction(transaction, [fromWallet]);
        await connection.confirmTransaction(signature);
        console.log(`Transferred ${amount} SOL from ${fromWallet.publicKey.toString()} to ${toPublicKey.toString()}`);
    } catch (err) {
        console.error("Error during transfer:", err);
    }
};


const main = async () => {
    console.log("Initial Wallet Balances:");
    await getWalletBalance(publicKey1, 'Wallet 1');
    await getWalletBalance(publicKey2, 'Wallet 2');

    console.log("Requesting Airdrop for Wallet 1...");
    await airDropSol(publicKey1);  

    console.log("Balances after Airdrop:");
    await getWalletBalance(publicKey1, 'Wallet 1');
    await getWalletBalance(publicKey2, 'Wallet 2');

    console.log("Transferring 1 SOL from Wallet 1 to Wallet 2...");
    await transferSol(wallet1, publicKey2, 1);  

    console.log("Final Wallet Balances:");
    await getWalletBalance(publicKey1, 'Wallet 1');
    await getWalletBalance(publicKey2, 'Wallet 2');
};

main();
