//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract DeLetterBase {
    struct addressList {
        address owner;
        string arweaveAddress;
    }

    mapping(address => addressList) public _addressList;

    constructor() {}

    modifier onlyOwner() {
        require(
            msg.sender == _addressList[msg.sender].owner,
            "Only owner can update"
        );
        _;
    }

    modifier checkArweave() {
        require(
            bytes(_addressList[msg.sender].arweaveAddress).length > 0,
            "Arweave address not set"
        );
        _;
    }

    function setArweaveAddress(string memory _arweaveAddress) external {
        require(
            bytes(_addressList[msg.sender].arweaveAddress).length == 0,
            "Arweave address already set"
        );
        _addressList[msg.sender].owner = msg.sender;
        _addressList[msg.sender].arweaveAddress = _arweaveAddress;
    }

    function updateArweaveAddress(string memory _arweaveAddress)
        external
        onlyOwner
        checkArweave
    {
        _addressList[msg.sender].arweaveAddress = _arweaveAddress;
    }
}
