
function _contract() {

    let contract = {}
    contract.Name = "Split transfers to multiple accounts."
    contract.Version = _contract_version

    return contract

}

function _transfer() {

    let to = _transfer_to
    let from = _transfer_from
    let amount = (_transfer_amount/4)

    let outputs = []
    outputs[0] = _send(from, to, amount, "payment 25% (a)")
    outputs[1] = _send(from, to, amount, "payment 25% (b)")
    outputs[2] = _send(from, to, amount, "payment 25% (c)")
    outputs[3] = _send(from, to, amount, "payment 25% (d)")

    let transfer = {}
    transfer.From = _transfer_from
    transfer.Outputs = outputs

    return transfer

}