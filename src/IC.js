// importa o web3
import web3 from "./web3";
// Endereço do contrato gerado no deploy
//const address = "0x928f5fEB8F255D6914b38D91D53C9a044Fa59A5B";
  const address = "0x224ab56467F19103b787e4107a986099afB7f49c";
// Abi gerada no deploy do contrato


/**
 * Lembrar de trocar a ABI
 */

 const abi =[
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [],
		name: "getAno",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "getConsumo",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "getDia",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "getEndereco",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "getInd",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "getMes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	// Aqui
	{
		inputs: [],
		name: "resumo",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "consumo",
				type: "uint256"
			}
		],
		name: "setConsumo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	}, 

	//Aqui
	{
		inputs: [
			{
				internalType: "uint256",
				name: "diaP",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "mesP",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "anoP",
				type: "uint256"
			}
		],
		name: "setData",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "endereco",
				type: "address"
			}
		],
		name: "setEndereco",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "ident",
				type: "uint256"
			}
		],
		name: "setIdentificador",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	}
]

//exporte o contrato
export default new web3.eth.Contract(abi, address);