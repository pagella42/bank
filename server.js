let express = require('express')
let app = express()
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let storage = {
    transactions: [],
    balance: 0,
    count: 0,
}
let status = true

let lock = () => {
    status = false
}
let release = () => {
    status = true
}

//allow foregin requests (ONLY FOR DEV MODE)
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

//routes
app.get('/transactions', function (req, res) {
    if (status) {
        res.send(storage)
    }
    else {
        res.status(403)
    }
})

app.get('/transaction/:id', function (req, res) {
    if (status) {
        let transaction = storage.transactions.find(t => t.id == req.params.id)
        res.send(transaction)

    }
    else {
        res.status(403)

    }
})


app.post('/newtransaction', function (req, res) {
    if(status){
        lock()

            if (req.body.type === "credit") {
                storage.balance += parseFloat(req.body.amount)
                let transaction = req.body
                transaction.id = storage.count
                storage.count++
                storage.transactions.push(transaction)
                res.end()
            }
            else if (req.body.type === "debit") {
                if (storage.balance - req.body.amount >= 0) {
                    storage.balance -= req.body.amount
                    let transaction = req.body
                    transaction.id = storage.count
                    storage.count++
                    storage.transactions.push(transaction)
                    res.end()
                }
                else {
                    res.send({ message: "Balance not enough" }).status(403)
                }
            }
            release()

    }
    else{
        res.status(403)
    }
})

app.listen(5000)