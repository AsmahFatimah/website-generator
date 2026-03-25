const express = require("express")
const router = express.Router()
const blogs = require('../../Blogs.js')
const { route } = require("./users.js")
const uuid = require('uuid')

router.get('/', (req,res) => {
    res.json(blogs)
    console.log(blogs);
    
})
router.get('/:id', (req, res) => {
    const filteredPost = blogs.find(blog => blog.id === parseInt(req.params.id))
    if(filteredPost){
        res.json(filteredPost)
        // console.log(filteredPost);
        
    }
    else{
        res.status(400).json({"msg": `this id ${req.params.id}doesnt exist`})
        // console.log("nothing.");
        
    }
})

router.post('/', (req, res)=>{
    const newPost = {
        "id": uuid.v6(),
        "title": req.body.title,
        "content": req.body.content
    }
    if(!newPost.title || !newPost.content ){
        return res.status(400).json({"msg": "please enter title and content."})
    }
    blogs.push(newPost)
    res.json(blogs)
    // console.log(blogs);    
})
router.put('/', (req, res)=>{
    res.json(blogs)
})
router.put('/:id', (req, res) => {
    const makeUpdate = blogs.findIndex(blog => blog.id === parseInt(req.params.id))
    if(makeUpdate !== -1){
       blogs[makeUpdate] = {
        id: blogs[makeUpdate].id,
         title: "req.body.title",
        content: "req.body.content"
       }

        blogs.push(blogs[makeUpdate])
        return res.json(blogs)
    }
       console.log("working...");

    
})
module.exports = router