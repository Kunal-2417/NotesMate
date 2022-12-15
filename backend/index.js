const main=require("./db")
const express=require("express")
const app=express()
const port=3000

main();


// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => { 
    res.send('POST request to the homepage')
})

//START THE SERVER
app.listen(port, () => {
    console.log(`Now your are using post: ${port}`)
})