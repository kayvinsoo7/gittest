const path = require('path') // used later in the exercise
const express = require('express')
const app = express()

// const mainRouter = express.Router()

// mainRouter.get('/', function (req, res) {
//     res.send('Hello World')
//     })
    
//     mainRouter.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'))
//     })

const mainRouter = require('./mainRoutes')
    
    app.use(mainRouter)
    // yirowi
    console.log('Yatzee')
    // ryuiro 24/04

    const port = process.env.PORT || 3000
    // new commit 
    
    // another new commit
    
    app.listen(port)
    console.log('Express server running on port(s) 3000', port)
