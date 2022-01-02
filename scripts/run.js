const main = async () => {
  // Grab the contract onwer address account
  const [owner] = await hre.ethers.getSigners();
    
  // Compile our contract
  const miPrimerContratoFactory = await hre.ethers.getContractFactory("MiPrimerContratoInteligente");  
  
  // Deploy our contract
  const miPrimerContrato = await miPrimerContratoFactory.deploy();  
  
  // Wait for the contract to publish
  await miPrimerContrato.deployed();  
  
  // Get the address of the contract
  const address = miPrimerContrato.address;
    
  console.log(`Contract deployed to ${address}`);
  console.log("Contract deployed by:", owner.address);
    
  let sendMsg = await miPrimerContrato.sendMessage('Hola Mundo');
  await sendMsg.wait();  
    
  let allMessages = await miPrimerContrato.getMessages();
  console.log(allMessages);
}

// Run the main function
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();