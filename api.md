# API/RPC
Reactioon Blockchain has methods to allow requests using the HTTP protocol. If you are using an insecure connection, use `'http'` or secure, use `'https'`.


@notes:
1. `{location}` on the URL needs to be replaced with [http/https]://ip:port.


### Node or List
List all nodes added.


URL:
```sh
{location}/rchain/node/list
```


Response:
```json
[
    {
        "type": "master",
        "address": "localhost:5000"
    },
    {
        "type": "master",
        "address": "localhost:3000"
    }
]
```


### Node/Add


URL:
```
{location}/rchain/node/add
```


Response:
```json
{
    "host": "localhost",
    "port": "5000",
    "msg": "Added new node"
}
```


### Node / Remove


URL:
```
{location}/rchain/node/remove
```


Response:
```
{
"host": "localhost",
"port": "5000",
"msg": "Removed node."
}
```


### Block / List


URL:
```
{location}/rchain/block/list
```


Response:
```json
[
    {
    "proof": true,
    "block": {
        "ts": "2024-02-10 15:20:18",
        "hash": "004201425d6ff5746ece1c29a9f787fd311eb2f92156582a2f80335b8e224a7a",
        "miner": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
        "txs": [
        {
            "id": "6eac2d3874516379472407c86efd83488ac7bfe8d316fc455e94820c9574c0b2",
            "confirmations": 1,
            "input": [
                {
                "ts": "2024-02-10 15:20:11",
                "id": "b076f264793aa349722d9f0aee79626ced000c0d0c601c455cc26448200eebde",
                "output": 5,
                "type": "transfer",
                "addr": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                "signature": "304502204ab37c8ee3eb0fc9bf20725254dd4686d1d12a343b321c56c7d6a7b9c4c71730022100e5953e1318a305500a9e8a7d621cf9666ec760b6d2504e296192cc2931b0556f",
                "pubkey": "0293b273fa4f80e7e704e5b50c857bfdbee2d125eb13f1a37260c8249f5a1ef435",
                "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                "data": "teste postman"
                }
            ],
            "output": [
                {
                    "addr": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                    "output": 5,
                    "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                    "data": "teste postman",
                    "way": "out"
                }
                ,
                {
                    "addr": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                    "output": 5,
                    "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                    "data": "teste postman",
                    "way": "in"
                }
            ]
        }
        ],
        "hashp": "00370cac68ad918684e947bb7719327af4236612747b4117b17c637e159c2775",
        "nonce": 155,
        "height": 7,
        "confirmations": 1
    }
    }
]
```


### Block/Info


Get the information about a block using the height of the chain.


URL:
```
{location}/rchain/block/info
```


Response:
```json
{
    "proof": true,
    "block": {
        "ts": "2024-02-09 18:06:11",
        "hash": "0063a756ba558889a9827944d5059fdadf162eef43005757e57c18132b577c8a",
        "miner": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
        "txs": [
            {
            "id": "37921481022177ce68f75c56eceb2e702ef8fbdcea6be72c9ef7ec0ca9f99c3c",
            "confirmations": 0,
            "input": [
                {
                    "ts": "2024-02-09 18:06:11",
                    "id": "5907936515884acfba40a03aaad59e1026632b18c4839bfa353d4635ea2d22ab",
                    "output": -1,
                    "type": "mint",
                    "addr": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                    "signature": "33303435303232313030663033376463393039383933313136376138626637663533363238316361366465366636333939626235663039613864333565636261386637623963643261643032323034613465656130373661326664623737386133646462376331333461313731656336366363393438373132643264623434326661363463663531653162653866",
                    "pubkey": "02774c95ebefee773757b30d427ca2b138d3d5c283c9ac7ca1f51bb2d8d15b0114",
                    "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                    "data": ""
                }
            ],
            "output": [
                {
                    "addr": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                    "output": 21000000,
                    "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                    "data": "Created genesis with 199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                    "way": "in"
                }
            ]
            }
        ],
        "hashp": "",
        "nonce": 14,
        "height": 0,
        "confirmations": 0
    }
}
```


### Tx / List


URL:
```
{location}/rchain/tx/list
```

Response
```json
[
    {
        "tx": [
            {
                "id": "6eac2d3874516379472407c86efd83488ac7bfe8d316fc455e94820c9574c0b2",
                "confirmations": 1,
                "input": [
                    {
                        "ts": "2024-02-10 15:20:11",
                        "id": "b076f264793aa349722d9f0aee79626ced000c0d0c601c455cc26448200eebde",
                        "output": 5,
                        "type": "transfer",
                        "addr": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                        "signature": "304502204ab37c8ee3eb0fc9bf20725254dd4686d1d12a343b321c56c7d6a7b9c4c71730022100e5953e1318a305500a9e8a7d621cf9666ec760b6d2504e296192cc2931b0556f",
                        "pubkey": "0293b273fa4f80e7e704e5b50c857bfdbee2d125eb13f1a37260c8249f5a1ef435",
                        "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                        "data": "teste postman 2"
                    }
                    ],
                    "output": [
                    {
                        "addr": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                        "output": 5,
                        "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                        "data": "teste postman 2",
                        "way": "out"
                    },
                    {
                        "addr": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                        "output": 5,
                        "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                        "data": "teste postman 2",
                        "way": "in"
                    }
                ]
            }
        ]
    }
]
```


### Tx / Info


URL:
```
{location}/rchain/tx/list
```


Response:
```json
{
    "tx": {
        "id": "6eac2d3874516379472407c86efd83488ac7bfe8d316fc455e94820c9574c0b2",
        "confirmations": 1,
        "input": [
        {
            "ts": "2024-02-10 15:20:11",
            "id": "b076f264793aa349722d9f0aee79626ced000c0d0c601c455cc26448200eebde",
            "output": 5,
            "type": "transfer",
            "addr": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
            "signature": "304502204ab37c8ee3eb0fc9bf20725254dd4686d1d12a343b321c56c7d6a7b9c4c71730022100e5953e1318a305500a9e8a7d621cf9666ec760b6d2504e296192cc2931b0556f",
            "pubkey": "0293b273fa4f80e7e704e5b50c857bfdbee2d125eb13f1a37260c8249f5a1ef435",
            "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
            "data": "teste postman 2"
        }
        ],
        "output": [
            {
                "addr": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                "output": 5,
                "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                "data": "teste postman 2",
                "way": "out"
            },
            {
                "addr": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                "output": 5,
                "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                "data": "teste postman 2",
                "way": "in"
            }
        ]
    }
}
```


### Tx / Create


URL:
```
{location}/rchain/tx/create
```


Response:


```json
{
    "contract": "0xb6bA64Ac31996fe96137aa436663F651B8C4Cc55",
    "type": "transfer",
    "from": "162F2YAjBCSUgxpicwUYmBUjFhA5pMAz4b",
    "to": "1BUi4Wu2ArPf8Ret3PEE3FRsbS2ZrjHYAP",
    "amount": 5,
    "unit": "RTN",
    "timestamp": "2024-02-11 04:45:31",
    "txid": "c832b1a85ccf943116bbd6f26294b6c6402767451c900dcf1df6800e675bda13"
}
```


### Wallet / Create


URL:
```
{location}/rchain/wallet/create
```


Response:
```json
{
    "address": "1BptwpFg5RrTFMGCPiazWto6ctrWjDEg26", // BIP39
    "key_public": "{public-key-hash}",
    "key_private": "{private-key-hash}",
    "mnemonic": "{24 words}"
}
```


### Wallet / Addresses


URL:
```
{location}/rchain/wallet/addresses
```


```json
[
    "1BptwpFg5RrTFMGCPiazWto6ctrWjDEg26",
    "1NUKrBaAj9FyjZeynp4Sc2vv9jfW5nJxy6",
    "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
    "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs"
]
```


### Wallets / Balances


URL:
```
{location}/rchain/wallet/balances
```


Response:
```json
[
    {
        "wallet": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
        "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
        "balance": 21000000,
        "unit": "RTN",
        "type": "token"
    }
    ,
    {
        "wallet": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
        "contract": "0x1ea82CCdbe82eb7f0E75C15afB425FE33050cCC8",
        "balance": 20999990,
        "unit": "RTN",
        "type": "token"
    }
]
```


### Wallet / Balances / All


URL:
```
{location}/rchain/wallet/balances/all
```


Response:
```json
[
    {
        "wallet": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
        "balances": [
            {
                "wallet": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                "balance": 0,
                "unit": "RTN",
                "type": "token"
            },
            {
                "wallet": "1LTPFYdtwjeaNzp6qLM42VWnBXqHuCVc5v",
                "contract": "0x1ea82CCdbe82eb7f0E75C15afB425FE33050cCC8",
                "balance": 10,
                "unit": "RTN",
                "type": "token"
            }
        ]
    },
    {
        "wallet": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
        "balances": [
            {
                "wallet": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                "contract": "0x17963489459Fc0cEc88545578cC04ce7B199a378",
                "balance": 21000000,
                "unit": "RTN",
                "type": "token"
            },
            {
                "wallet": "199XXKvmRiLNyhVX1h1PAtPSwr6qyV3sJs",
                "contract": "0x1ea82CCdbe82eb7f0E75C15afB425FE33050cCC8",
                "balance": 20999990,
                "unit": "RTN",
                "type": "token"
            }
        ]
    }
]
```