const abi = {
	"compiler": {
		"version": "0.8.29+commit.ab55807c"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "allowance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "needed",
						"type": "uint256"
					}
				],
				"name": "ERC20InsufficientAllowance",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "needed",
						"type": "uint256"
					}
				],
				"name": "ERC20InsufficientBalance",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "approver",
						"type": "address"
					}
				],
				"name": "ERC20InvalidApprover",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					}
				],
				"name": "ERC20InvalidReceiver",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "ERC20InvalidSender",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					}
				],
				"name": "ERC20InvalidSpender",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "OwnableInvalidOwner",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "OwnableUnauthorizedAccount",
				"type": "error"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [],
				"name": "FAUCET_LIMIT",
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
				"inputs": [],
				"name": "INITIAL_OWNER",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "INITIAL_SUPPLY",
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
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					}
				],
				"name": "allowance",
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
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "balanceOf",
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
				"inputs": [],
				"name": "decimals",
				"outputs": [
					{
						"internalType": "uint8",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "faucet",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "lastRequest",
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
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
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
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"errors": {
				"ERC20InsufficientAllowance(address,uint256,uint256)": [
					{
						"details": "Indicates a failure with the `spender`’s `allowance`. Used in transfers.",
						"params": {
							"allowance": "Amount of tokens a `spender` is allowed to operate with.",
							"needed": "Minimum amount required to perform a transfer.",
							"spender": "Address that may be allowed to operate on tokens without being their owner."
						}
					}
				],
				"ERC20InsufficientBalance(address,uint256,uint256)": [
					{
						"details": "Indicates an error related to the current `balance` of a `sender`. Used in transfers.",
						"params": {
							"balance": "Current balance for the interacting account.",
							"needed": "Minimum amount required to perform a transfer.",
							"sender": "Address whose tokens are being transferred."
						}
					}
				],
				"ERC20InvalidApprover(address)": [
					{
						"details": "Indicates a failure with the `approver` of a token to be approved. Used in approvals.",
						"params": {
							"approver": "Address initiating an approval operation."
						}
					}
				],
				"ERC20InvalidReceiver(address)": [
					{
						"details": "Indicates a failure with the token `receiver`. Used in transfers.",
						"params": {
							"receiver": "Address to which tokens are being transferred."
						}
					}
				],
				"ERC20InvalidSender(address)": [
					{
						"details": "Indicates a failure with the token `sender`. Used in transfers.",
						"params": {
							"sender": "Address whose tokens are being transferred."
						}
					}
				],
				"ERC20InvalidSpender(address)": [
					{
						"details": "Indicates a failure with the `spender` to be approved. Used in approvals.",
						"params": {
							"spender": "Address that may be allowed to operate on tokens without being their owner."
						}
					}
				],
				"OwnableInvalidOwner(address)": [
					{
						"details": "The owner is not a valid owner account. (eg. `address(0)`)"
					}
				],
				"OwnableUnauthorizedAccount(address)": [
					{
						"details": "The caller account is not authorized to perform an operation."
					}
				]
			},
			"events": {
				"Approval(address,address,uint256)": {
					"details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
				},
				"Transfer(address,address,uint256)": {
					"details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
				}
			},
			"kind": "dev",
			"methods": {
				"allowance(address,address)": {
					"details": "See {IERC20-allowance}."
				},
				"approve(address,uint256)": {
					"details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
				},
				"balanceOf(address)": {
					"details": "See {IERC20-balanceOf}."
				},
				"decimals()": {
					"details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
				},
				"name()": {
					"details": "Returns the name of the token."
				},
				"owner()": {
					"details": "Returns the address of the current owner."
				},
				"renounceOwnership()": {
					"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
				},
				"symbol()": {
					"details": "Returns the symbol of the token, usually a shorter version of the name."
				},
				"totalSupply()": {
					"details": "See {IERC20-totalSupply}."
				},
				"transfer(address,uint256)": {
					"details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
				},
				"transferOwnership(address)": {
					"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
				}
			},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/Tashi.sol": "TashiBTC"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts/access/Ownable.sol": {
			"keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
			"license": "MIT",
			"urls": [
				"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
				"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
			]
		},
		"@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
			"keccak256": "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
			"license": "MIT",
			"urls": [
				"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
				"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"
			]
		},
		"@openzeppelin/contracts/token/ERC20/ERC20.sol": {
			"keccak256": "0x6ef9389a2c07bc40d8a7ba48914724ab2c108fac391ce12314f01321813e6368",
			"license": "MIT",
			"urls": [
				"bzz-raw://b7a5cb39b1e6df68f4dd9a5e76e853d745a74ffb3dfd7df4ae4d2ace6992a171",
				"dweb:/ipfs/QmPbzKR19rdM8X3PLQjsmHRepUKhvoZnedSR63XyGtXZib"
			]
		},
		"@openzeppelin/contracts/token/ERC20/IERC20.sol": {
			"keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
			"license": "MIT",
			"urls": [
				"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
				"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
			]
		},
		"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
			"keccak256": "0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330",
			"license": "MIT",
			"urls": [
				"bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf",
				"dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r"
			]
		},
		"@openzeppelin/contracts/utils/Context.sol": {
			"keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
			"license": "MIT",
			"urls": [
				"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
				"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
			]
		},
		"contracts/Tashi.sol": {
			"keccak256": "0xf116647f17d819b0469470e09ede41a7c8e2901043bd552a44f5b984db233e9c",
			"license": "MIT",
			"urls": [
				"bzz-raw://e56820b961643caf0374d0bff5e364f69b25a022bfac11a7f9528c05a322e5eb",
				"dweb:/ipfs/QmZGvr1qRnFGPU8wK1wozNuX5cHTuXo1p4tFvT7ULkiWJN"
			]
		}
	},
	"version": 1
}

export default abi.output.abi;