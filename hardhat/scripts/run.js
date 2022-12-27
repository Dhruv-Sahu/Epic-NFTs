const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    // Actually compiles our contract and generate the necessary files we need to work with our contract under artifacts

    const nftContract = await nftContractFactory.deploy();
    // Creates Local ethereum network for us.

    await nftContract.deployed();
    // we will wait until our contract is officially minde and deployed to our local blockchain

    console.log("Contract deployed to:",nftContract.address);
    // Gives access to the address

    // Call the function 
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined
    await txn.wait()
// Mint another nft for fun
    txn = await nftContract.makeAnEpicNFT()
    await txn.wait();
};

const runMain = async() =>{
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

runMain();