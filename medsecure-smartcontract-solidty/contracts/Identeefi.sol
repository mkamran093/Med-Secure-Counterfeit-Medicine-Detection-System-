// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract identeefi {
    address public contractOwner;

    struct ProductDetails {
        string name;
        string serial;
        string description;
        string brand;
        string imageUrl;
        mapping(uint => HistoryEntry) historyEntries;
        uint historyCount;
    }

    mapping(string => ProductDetails) private productRegistry;
    mapping(uint => HistoryEntry) private historyData;

    struct HistoryEntry {
        uint id;
        string actor;
        string location;
        string timestamp;
        bool soldStatus;
    }

    constructor() {
        contractOwner = msg.sender;
    }

    function registerNewProduct(
        string memory _name,
        string memory _brand,
        string memory _serial,
        string memory _description,
        string memory _imageUrl,
        string memory _actor,
        string memory _location,
        string memory _timestamp
    ) public {
        ProductDetails storage product = productRegistry[_serial];

        product.name = _name;
        product.brand = _brand;
        product.serial = _serial;
        product.description = _description;
        product.imageUrl = _imageUrl;
        product.historyCount = 0;

        addHistoryEntry(_serial, _actor, _location, _timestamp, false);
    }

    function addHistoryEntry(
        string memory _serial,
        string memory _actor,
        string memory _location,
        string memory _timestamp,
        bool _soldStatus
    ) public {
        ProductDetails storage product = productRegistry[_serial];
        product.historyCount++;
        product.historyEntries[product.historyCount] = HistoryEntry(product.historyCount, _actor, _location, _timestamp, _soldStatus);

        console.log("History entry index: %s", product.historyCount);
        console.log("History entry added by: %s", product.historyEntries[product.historyCount].actor);
        console.log("Product name: %s", product.name);
    }

    function getProductDetails(string memory _serial)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            HistoryEntry[] memory
        )
    {
        ProductDetails storage product = productRegistry[_serial];
        HistoryEntry[] memory historyArray = new HistoryEntry[](product.historyCount);

        for (uint i = 0; i < product.historyCount; i++) {
            historyArray[i] = product.historyEntries[i + 1];
        }

        return (
            product.serial,
            product.name,
            product.brand,
            product.description,
            product.imageUrl,
            historyArray
        );
    }
}

