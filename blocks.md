# Blocks
Reactioon blockchain works like another chain, moving transactions from pool to inside of a valid block. The content of the block is signed by a miner solving a hash problem based on a difficulty defined by the network.

## Proof-of-Work and Signatures
Reactioon uses the Proof-of-Work mechanism to sign blocks with the miner credentials. The block contents use a merkle tree to protect the data of the chain and reduce cost with validations using small parts of data.

## Height
Like other chains, the reactioon blockchain has a height (size). On consensus, the valid block with the biggest height will replace other nodes.

## Mining
The miner is represented by the wallet, and the rewards will be added to the miner's address. New blocks on the chain need validation, checking if transactions are valid. When the miner finds the appropriate hash, the block with valid transactions will be saved and distributed over the network to be validated with others. If the number of confirmations of a block is greater than 2/3 of active nodes, the block will be confirmed and added to the chain.

**@note:**
1. Only transactions with more than 2/3 of active nodes will be added to the chain.
2. To prevent hosts from mining, the user can set it in the config file.


## Mining Interval
By default, the interval of mining is 60s; the network manager can increase or decrease it when starting the chain.

## Empty blocks
Only blocks with transactions will be added to the chain.