const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs')


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ["*"])
    res.append("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT")
    res.append("Access-Control-Allow-Headers", "Content-Type")
    next();
})

app.post('/fetch',(req,res) => {
    const feedBackList = fs.readFileSync('./feedbackRecords.json',{encoding:'utf8',flag:'r'})
    const feedBack = JSON.parse(feedBackList)

    res.send(feedBack)
})
app.post('/addItem',(req,res)=> {
    console.log("inside backend addItem")
    const feedBackList = fs.readFileSync('./feedbackRecords.json',{encoding:'utf8',flag:'r'})
    const feedBack = JSON.parse(feedBackList)
    console.log("req.body",req.body)

    var subject = req.body.title
    var id = req.body.acf2
    var time = req.body.date
    var text = req.body.text

    var toPush = {
        subject: subject,
        id: id,
        time: time,
        text: text
    }

    feedBack.push(toPush)
    // console.log(feedBack)
    fs.writeFileSync('./feedbackRecords.json', JSON.stringify(feedBack, null,2) + "\r\n")
    console.log("backend additem should be done, check feedbackRecords.txt")
})

app.get('/',(req,res) => {
    res.send('hello,world')
});

app.listen(8000, ()=> {
    console.log('Server is running on port 8000')
})
