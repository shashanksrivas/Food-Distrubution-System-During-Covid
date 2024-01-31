async function init_web3() {
  var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

    //Load accounts
    window.accounts = ["0x0B0484682Dc15e924e90c4D6660ef0c7A6d18696"];
    console.log("Loaded accounts");

    // The interface definition for your smart contract (the ABI)
    window.pm = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "governmentbody",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "idname",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "idno",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "phnno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "address1",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "pincode",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "abt",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "otp",
				"type": "string"
			}
		],
		"name": "Distributorreg",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Donateadd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "PhoneNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pin",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeperiod",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "starttime",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "waitingtime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "statusbydonor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "statusbydist",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pass",
				"type": "string"
			}
		],
		"name": "Login",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "PhoneNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Address1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "landmark",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Pincode",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "EmailId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "otp",
				"type": "string"
			}
		],
		"name": "donorRegd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ref",
				"type": "uint256"
			}
		],
		"name": "donorconfirmation",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "donors",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phnno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_address1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_address2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_landmark",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_pincode",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_otp",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "phonenumber",
				"type": "uint256"
			}
		],
		"name": "findrespectiveReferenceIdbyphone",
		"outputs": [
			{
				"internalType": "uint256[1000]",
				"name": "",
				"type": "uint256[1000]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pin",
				"type": "uint256"
			}
		],
		"name": "findrespectiveReferenceIdbypin",
		"outputs": [
			{
				"internalType": "uint256[1000]",
				"name": "",
				"type": "uint256[1000]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "referenceId",
				"type": "uint256"
			}
		],
		"name": "findrespectivebyReferenceId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getDistributorDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "phnno",
				"type": "uint256"
			}
		],
		"name": "getdonordetail",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ref",
				"type": "uint256"
			}
		],
		"name": "getstatus",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gettotaldonation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "indexnewDonation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "phonenumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pin",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Describe",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Duration",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Starttime",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "waitingtime",
				"type": "uint256"
			}
		],
		"name": "newDonation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ref",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "pickupbydist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ref",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "responsedist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "referenceId",
				"type": "uint256"
			}
		],
		"name": "statusDonation",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
])
//address of contract
window.pm.options.address = '0x61a19D4ce481774733615a45322dfBe9ffD11057'
console.log("after web3")
}
export {
  init_web3
}
