# Network
Reactioon Blockchain has an internal module to work with network nodes, keeping data updated on multiple machines located remotely or locally. The network nodes can be public or private. An network node can be master or slave; the master node accepts connections from everyone, and the slave node connects to others.

## Setup

### Add node
The master node can be added to enable connections on your node.

```sh
./rchain -x node-add --host=localhost:3000 --node=3000
```

@notes:
1. The host is the representation of your location with `ip:port`.
2. The `--node` is your host port; it needs to be the same as added to your host.


### Start node

```sh
./rchain -x node-start --node=3000 --miner={miner-address}
```

@notes:
1. The `--node` is to identify the node using the port.
2. The `--miner` is the miner address to add new blocks.