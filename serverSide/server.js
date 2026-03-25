// CommonJS style
const express = require('express');
const cors = require('cors');
const uuid = require ('uuid');
const app = express()
const PORT = process.env.PORT || 5000
const corsOptions = {
    origin: '*'
}

app.use(express.json())

const mySites = {}
app.use(cors(corsOptions))

app.get('/', (req,res) => {
    res.send("server is running")
})
app.post('/mySites', (req, res)=> {
    const siteId = uuid.v4()
    mySites[siteId] = req.body
    const siteUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}/${siteId}`
    // app.post('https://hook.eu2.make.com/j1q4c6qwcujnwimw6s8kuik7mamidmnt'), (req, res) => {
    //     res.send(siteUrl)
    // }
    console.log(siteUrl)

    res.json({previewUrl: siteUrl, id:siteId})
})
app.get('/mySites/:id', (req,res) =>{
    const generatedWebsite = mySites[req.params.id]
    if(!generatedWebsite){
        res.status(404).send("site doesnt exist on this url")
    }
    else{
    res.json(generatedWebsite)

}

})


app.get('/mySites', (req, res) => {
    res.json(mySites)
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))


