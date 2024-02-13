# Reactioon Blockchain (aka, RCHAIN)

Reactioon Blockchain (aka, rchain) is the solution to creating multiple blockchains to store and transfer data from any software with network consensus and imutability.

## Why build it?
On Reactioon, we have RTN, and the token is used inside of our tools. The high cost of transferring tokens on chain between accounts is a big problem for us, so we built our own blockchain to attach to all the software that we will make in the future.

The whole concept of blockchain is interesting: "save and distribute data, preventing changes in the future." In the real world, blockchain can solve a lot of problems in logistics, health, travel, and much more. But with the growth of this approach, most of the networks that have the concept have a high cost of processing data and can't be used to make simple things for small businesses. So, on reactioon we need something small, fast, portable, and low-cost.

## Concept

The reactioon blockchain (aka, rchain) has been projected to be used as software or as a network. We build the blockchain as a `distributed and immutable records book` to run in parallel, enhancing the resources of any software. The blockchain of reactioon can be public or private; multiple chains can be created and run on the same network; and each chain has its own network, consensus, data, difficulty, and size.

## Requirements

* Linux Debian 11/MacOS Sonoma
* 1GB HD
* 256 MB of RAM

## Package

The Rchain package has been projected to be distributed in one file, so all modules of Rchain are internal modules, with everything added inside the `rchain` file. The package has options to create networks, create accounts, send and receive transactions, replicate data, and more.

- Wallets  
The wallet is the user account that can be used to interact with the software, doing actions with "transactions." The wallet/user data contains a public key, a private key, and a mnemonic seed.

- Network  
Network is the way to interact with rchain over remote hosts or on the same machine, connecting the nodes and processing transactions. The network can be public or private, in the same location or multiple locations.

- Chain  
Chain is the core; they save the whole data and prevent changes with signatures.

@note: To see all options available, just run the help.

## Download
To run your own blockchain, just clone the repository, look up the `builds` folder in the binary of rchain, and follow the steps below.

## Install
1. Create the chain.

The first step is to create your blockchain.

command:
```sh
./rchain -x chain-create --host=localhost --port=3000 --pass=teste
```

result:
```sh
----
Reactioon Blockchain (aka, rchain)
----

[ Blockchain ]
     Status: created
     Height: 0
   Contract: 0x47e3839f3a2E1E9af1b09bbaB34dBeDBbBD68111
     Supply: 1 RTN

[ Wallet ]
    Address: 1LyGNAHrgvWkmgMMXW9rfhTEmQcKv3aPg8
       Seed: {wallet-seed}
   Mnemonic: {wallet-mnemonic-24words}
   Password: {wallet-mnemonic-password}

[ Host ]
       Host: localhost
       Port: 3000
----
```

**@notes:**
1. The `--host` flag represents the host of the chain.
2. The `--port` flag represents the port of chain.
3. The `--pass` flag represents the password to unlock the mnemonic of Genesis.

2. Start the chain.
After creating the chain, you can start the chain to make blocks.

command:
```sh
./rchain -x node-start --host=localhost:3000 --miner=1LyGNAHrgvWkmgMMXW9rfhTEmQcKv3aPg8
```
Note: The miner address will receive fees for transactions.

## Wallets

**1. Create a wallet**
If you are running the node for the first time, you can create a new wallet to send or receive artifacts.

command:
```sh
./rchain -x wallet-create --node=3000 --passwd="teste"
```

@notes:
1. The `--node` flag represents the port to run the blockchain node inside your network or machine.
2. The `--save` flag represents if you want to save the private key of your wallet in the keys folder inside your machine.
3. The `--pkeys` flag represents the folder to store the keys.

Important: The default path folder to --pkeys is `keys` inside the binary base path.

result:
```json
{
    "address":"1D9LRpxRR5Ea53ofGtfY18U4LCQpEvak6w",
    "key_public":"{public_key_hash}",
    "key_private":"{priv_key_hash}",
    "mnemonic":"{24 words}"
}
```

**@note:** If you don't set the `--save` flag, the private key won't be saved in the keys folder. If you want to add additional security to your wallet, don't store a private key on your machine.

## Transactions
When creating a new empty chain, the genesis contract will be created with the amount of tokens to send between wallets.

```sh
./rchain -x tx-create --from= --to= --amount= --contract=
```
@Note: All transactions will be added to 'tx pool'.

## Smart-Contracts
Smart contracts can be used to create new situations on the blockchain, the aspect of a transfer can be changed, or new artifacts can be created.

### RVM (Reactioon Virtual Machine)
Smart contracts use the RVM to compile a contract and execute it inside of rchain. The RVM actually runs only JavaScript, and the contract needs a header with its scope.

### Artifacts
Artifacts are the way to create new representations on chains that will be stored on wallets using the smart contract concept. The representation of an artifact inside a chain can be a token or NFT. When the artifact is minted, it can be used to represent anything that will be distributed on wallets to users.

- **Token**  
Tokens are artifacts that will represent a divisible asset; they can be used to represent points or currencies.

- **NFT**  
NFT are artifacts that will represent a unique asset; they can be used to represent documents like tickets, collectibles, and more.

## Use Cases

* **Points**  
The rchain can be used to manage points for an employee inside of a company. Each employee can have their own wallet, and their wallet will store artifacts. The points can be changed to benefits; 1000 of asset X represents 'x days off'.

* **Quota Distribution**  
Most companies have more than one person on the company's board of directors. The chain can be used to distribute quotes from the company to each person based on the results of the period.

* **Product Stock**  
Most companies have stock for their products, and the stock has an 'in' and 'out' of an item. The item can be represented with a token, created with a contract that represents the amount of the item.

* **Event Control**  
Events have a list of participants, but in some cases, the work to control access is manual, with a list based on paper, email, or sheets. rchain can be used to create the list of participants, and the presence can be saved in an immutable book and synced with a central remote. And each node still works without the internet.

* **Credits/Licences**  
Most software uses a credit or license to grant access to the user. A rchain can be attached to any software to be used to control user licenses, both online and offline.

* **Internet of Things**  
The Internet of Things is the concept of connecting a device to a network to execute actions at home, in the office, etc. rchain can be attached to any project to solve the latency problem. All devices connect to a local network and sync data remotely; if the network is out, the device works.

## Next steps
* Tx Fees
* Block Rewards
* Smart Contracts (Enhancements)

## Limitations
The actual version is only for testing and learning; we don't recommend using it in a production environment. To prevent this, the maximum number of wallets is 3, and the maximum number of blocks is 1000. After the tests, access will be open without limitations.

## Conclusion
The reactioon blockchain is based on the work of developers from Bitcoin, Ethereum, and Solana, and we think these projects are doing a great job, thanks to all.

The whole concept of Reactioon Blockchain is still in development and can be enhanced in the future with features and changes. The actual release candidate (RC) version has limitations; it's to be used only for testing and learning purposes.

<br>

That's all! Folks!  
@author José Wilker (CEO/Developer)

