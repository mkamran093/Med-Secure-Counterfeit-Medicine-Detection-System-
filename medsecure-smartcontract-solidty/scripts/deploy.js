const executeDeployment = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const balance = await deployer.getBalance();

  console.log("Deploying contracts using account:", deployer.address);
  console.log("Account balance:", balance.toString());

  const contractFactory = await hre.ethers.getContractFactory("Identeefi");
  const contractInstance = await contractFactory.deploy();
  await contractInstance.deployed();

  console.log("Identeefi contract address:", contractInstance.address);
};

const startExecution = async () => {
  try {
    await executeDeployment();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startExecution();

