const express = require ('express')
const app = new express()
app.use(express.static('public'))

app.listen(4000, () =>{
    console.log('app listening on port http://127.0.0.1:4000/')
})