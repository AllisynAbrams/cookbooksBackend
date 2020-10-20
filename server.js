const express = require('express')
const logger = require('morgan')
const app = express()

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(logger('dev'))
app.use(express.urlencoded({extended:false})) /*in postman we POST via Body xwwwformurlencoded*/
app.use(express.json()) /*in postman we can also POST via Body raw JSON*/

const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
app.use('/api/authors/', authorRouter)

app.listen(4000, () => console.log('Server running on port 4000!'))
