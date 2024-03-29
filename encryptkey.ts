// const ethers = require("ethers")
// const fs = require("fs-extra")
// require("dotenv").config()

import { ethers } from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"
import {} from "dotenv/config"

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)
    const encryptedJsonKey = await wallet.encrypt(
        //PRIVATE_KEY_PASSWORD=password in .env then add 2nd parameter  //process.env.PRIVATE_KEY_PASSWORD

        process.env.PRIVATE_KEY!
    )
    console.log(encryptedJsonKey)
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
