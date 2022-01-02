//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MiPrimerContratoInteligente {
  
  struct Message {
    string message;
    address sender;
  }

  Message[] messages;

  function sendMessage(string memory _message) public {
    
    console.log("El usuario %s ha diho: %s", msg.sender, _message);

    messages.push(Message({
      message: _message,
      sender: msg.sender
    }));

  }

  function getMessages() public view returns (Message[] memory) {
    return messages;
  }
}