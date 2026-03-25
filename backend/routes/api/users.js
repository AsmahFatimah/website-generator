const express = require("express")
const router = express.Router()
const users = require('../../Users.js')
const uuid = require("uuid")

router.get("/", (req, res) => {
  res.json(users)
});

// get user by id
router.get('/:id', (req, res) => {
   const filteredUser = users.find(user => user.id === parseInt(req.params.id))
   if(filteredUser){
    res.json(filteredUser)
   }
   else{
    res.status(400).json({msg: `nothing found of id ${req.params.id}`})
   }
    // res.json(users.filter(user => user.id === parseInt(req.params.id)))
})

router.post('/', (req, res) => {
  // console.log(req.body);
  const uniqueId = uuid.v6()
  const newUser = {
    "id": uniqueId,
    "userId": uniqueId,
    "title": req.body.title,
    "body": req.body.body
  }
  if(!newUser.title || !newUser.body){
    res.status(400).json({"msg": "please enter title and body"})
  }

  users.push(newUser)
  res.json(users)
  
  
})

module.exports = router 