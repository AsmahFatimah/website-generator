const express = require("express")
const router = express.Router()
const sites = require("../../Sites.js")
const uuid = require('uuid')

router.get('/', (req, res) => {
    res.json(sites)
})

router.get('/:id', (req, res) =>{
    const filteredSites = sites.find(site => site.id === req.params.id)
    if(filteredSites){
        res.json(filteredSites)
    }
    else{
        res.json({msg: `site doesnt exist on this id ${req.params.id}`})
    }
})

router.post('/', (req, res)=>{
    let id= uuid.v6()
    const newSite = {
        id,
        businessName: req.body.businessName,
        businessDetail: req.body.businessDetail,
        returningUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}${id}`
    }
    sites.push(newSite)
    res.json(sites)
})

router.put('/:id', (req,res) => {
    const exists = sites.find(site => site.id === req.params.id)
    if(!exists){
        res.json({msg:"id doesnt exists"})
       
    }
    exists.businessName = req.body.businessName ? req.body.businessName : exists.businessName
    exists.businessDetail = req.body.businessDetail ? req.body.businessDetail : exists.businessDetail
    return res.json(sites)
        
})
module.exports = router