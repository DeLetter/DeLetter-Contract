//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import 'hardhat/console.sol';
import "@openzeppelin/contracts/access/Ownable.sol";

contract DeLetterBase is Ownable {
    struct addressList {
        address owner;
        string arweaveAddress;
    }

    mapping(address => addressList) public _addressList;

    constructor() {}

    function setArweaveAddress(address _owner, string memory _arweaveAddress)
        external
        onlyOwner
    {
        _addressList[msg.sender].owner = _owner;
        _addressList[msg.sender].arweaveAddress = _arweaveAddress;
    }

    function getArweaveAddress(address _owner)
        external
        view
        returns (string memory)
    {
        return _addressList[_owner].arweaveAddress;
    }

    function updateArweaveAddress(address _owner, string memory _arweaveAddress)
        external
        onlyOwner
    {
        _addressList[_owner].arweaveAddress = _arweaveAddress;
    }
}
