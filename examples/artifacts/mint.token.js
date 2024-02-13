// 
// Example to mint artifacts (tokens/nfts) inside of reactioon blockchain using javascript.
//
// @language : javascript
// @author   : stark (stark@reactioon.com)
// @date     : 
//

// 1. open the contract directive
_contract = {}
_contract.Name = "Mint RTN token."
_contract.Description = "test description"
_contract.Compiler = "rvmjs@0.0.1"

// 2. create the function that activate the mint of an artifact.
function _mint() {

    // open mint directive and set properties of artifact
    mint = {}
    mint.Name = "Reactioon (RTN)"
    mint.Suffix = "RTN"
    mint.Url = "https://www.reactioon.com"
    mint.Supply = 21000000
    mint.Decimals = 8

    return mint

}