# Uniswap V3 Event Listener

This Node.js application listens for events emitted by a Uniswap V3 pool smart contract on the Ethereum blockchain and stores those events in a MongoDB database. It can be used to monitor and analyze blockchain data related to decentralized finance (DeFi) operations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js installed ([Download Node.js](https://nodejs.org/))
-   MongoDB installed and running locally ([MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/))

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Brogramerr/UniswapV3-Event-Listener.git
    ```

2. Start your MongoDB Server.

3. Restore Packages:

    ```bash
    npm install
    ```

4. Run your Application:

    ```bash
    node listener.js
    ```

    Replace the placeholders in the code with your specific values:

    - `POOL_CONTRACT_ADDRESS`: Replace with your Uniswap V3 pool contract address.
    - `ETHEREUM_NODE_URL`: Replace with your Ethereum node WebSocket URL.

In this README file, replace placeholders like `YOUR_POOL_CONTRACT_ADDRESS` and `YOUR_ETHEREUM_NODE_URL` with the specific Ethereum contract address and Ethereum node WebSocket URL you intend to use.

Feel free to modify the README to include additional details or instructions specific to your project or deployment environment.
