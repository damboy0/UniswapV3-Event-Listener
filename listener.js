const { Web3 } = require("web3")
const { MongoClient } = require("mongodb")
require("dotenv").config()

const POOL_CONTRACT_ADDRESS = process.env.POOL_CONTRACT_ADDRESS
//const ETHEREUM_NODE_URL = process.env.ETHEREUM_NODE_UR
const ETHEREUM_NODE_URL = "wss://eth-mainnet.g.alchemy.com/v2/YOUR-API-KEY"

if (!ETHEREUM_NODE_URL) {
    console.error("ETHEREUM_NODE_URL is not defined. Please set it.")
    process.exit(1)
}

const web3 = new Web3(ETHEREUM_NODE_URL)
const poolContractAddress = POOL_CONTRACT_ADDRESS
const contractABI = require("./UniswapV3PoolABI.json")

const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function main() {
    try {
        await client.connect()
        console.log("Connected to MongoDB")
        const db = client.db("uniswap_events")
        const collection = db.collection("pool_events")

        const poolContract = new web3.eth.Contract(contractABI, poolContractAddress)

        poolContract.events
            .allEvents()
            .on("data", async (event) => {
                console.log("Received event:", event)
                await collection.insertOne(event)
            })
            .on("error", (error) => {
                console.error("Error:", error)
            })
    } catch (err) {
        console.error("Error:", err)
    }
}

main()
