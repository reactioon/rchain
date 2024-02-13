# CLI (Command Line Interface)
Reactioon Blockchain has a command-line interface (cli) to help users interact with the chain. Most users use only the API module, but the same features inside the API can be called on the cli.

## Commands
The command execution has a pattern to interact with all actions inside of cli; see below for the structure of the command.

```
./rchain -x {area-action} {options}
```

### Areas

* node-{action}
* wallet-{action}
* tx-{action}
* block-{action}


### Result
Each command has its own result, and the result will be formatted to be printed on the terminal. like the example below:

```
----
Reactioon Blockchain (aka, rchain)
----
-------------------
[ Tx / Info ]

Date: 2024-02-11 06:00:31
TxID: ec64280f4698d6d4436d8b767f7a11752c707b5a4336336b3cd22bb91fe7147c
Amount: 5
Type: transfer
Contract: 0xE7661396A08C540710352DcC11271A7174c88060
Address: 13kuNin57syENohRWAsLxBAUCxijm62sWR
Confirmations: 1
Signature: 3045022100eb3851b64ea6dff67bf33dfa635120065a20cad2e692986e49be568d3077591202207aec28a6fdd94efc138f3a3be7bbb79ce8967fe69839abab0c4ad45e9f89ef85

[ Tx / Outputs ]

Address: 13kuNin57syENohRWAsLxBAUCxijm62sWR
Contract: 0xE7661396A08C540710352DcC11271A7174c88060
Output: 5
Data: teste postman - teste
Way: out
-----
Address: 13tjQF1W7ncERDN58obwFNKP7nmFEk4JYF
Contract: 0xE7661396A08C540710352DcC11271A7174c88060
Output: 5
Data: teste postman - teste
Way: in
-------------------
```

## Help
You can see all areas and options allowed on CLI using the help flag.


```
./rchain -x help
```