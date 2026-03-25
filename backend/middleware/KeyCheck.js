const express = require("express")
const router = express.Router()

const keyCheck = (req, res, next) => {
    const timeStamp = new Date().toLocaleDateString()
    console.log(`date: ${timeStamp}`);

    const apiKey = req.get('x-api-key')
    if(!apiKey){
        return res.status(403).json({msg: "add api key"})        
    }
    if(apiKey!== "1234"){
        return res.status(403).json({msg: "add valid api key"})
    }
    next()
}
module.exports = keyCheck