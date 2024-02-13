# Contracts
Reactioon Blockchain has a virtual machine (aka, RVM) to compile the contract and process custom actions inside the blockchain, allowing the users to create their own processes.

# RVM
Smart contracts on reactioon blockchain use the RVM, which has support for working with multiple languages. So, the contract needs to be represented with the appropriate tags to work correctly. Actually, RVM has support to work with JavaScript, and the compiler can be represented with `rvm{lang}@{version}`.

To identify a contract, RVM uses the `_contract` to start the process, so the contract script needs it to start.

JavaScript:
```js
_contract={}
_contract.Compiler="rvmjs@0.0.1"
```

## Examples

1. Basic
Script with custom information about the contract.

```js
// genesis contract
_contract = {}
_contract.Name = "Genesis contract"
_contract.Description = "First contract created on chain."
_contract.Compiler = "rvmjs@0.0.1"
```

Note: The script above will create a contract using JavaScript with a custom name and description.

### Important!
When a contract is created, they will receive an address based on the wallet address, and the contract is saved in the wallet.

# Conclusion
The RVM is in development; this is a Release Candidate Version (RC). Most of its resources will be tested and used in a reactioon environment before the launch.




