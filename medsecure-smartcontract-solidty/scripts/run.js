const deployAndRegister = async () => {
    const contractFactory = await hre.ethers.getContractFactory("Identeefi");
    const deployedContract = await contractFactory.deploy();
    await deployedContract.deployed();
    console.log("Contract deployed at:", deployedContract.address);

    const registrationTxn = await deployedContract.registerProduct("name", "brand", "001", "description", "image", "Manufacturer Inc", "location", "654321");

    await registrationTxn.wait();
    console.log("Product registered with transaction hash:", registrationTxn.hash);

    const historyTxn1 = await deployedContract.addProductHistory("001", "Manufacturer Inc", "location", "7654321", false);
    await historyTxn1.wait();
    console.log("First product history added with transaction hash:", historyTxn1.hash);

    const historyTxn2 = await deployedContract.addProductHistory("001", "Supplier Inc", "sLocation", "87654321", false);
    await historyTxn2.wait();
    console.log("Second product history added with transaction hash:", historyTxn2.hash);

    const productDetails = await deployedContract.getProduct("001");
    console.log("Product details:", productDetails);
};

const executeDeployment = async () => {
    try {
        await deployAndRegister();
        process.exit(0); // Exit Node process successfully
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit Node process with an error
    }
    // For more information on Node exit status codes: https://stackoverflow.com/a/47163396/7974948
};

executeDeployment();

