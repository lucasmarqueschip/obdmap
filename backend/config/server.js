var express = require('express')
var consign = require('consign')
const path = require('path')

var app = express()

const PATH_VIEW_FRONT = path.join(__dirname, '../../frontend')
// console.log(PATH_VIEW_FRONT)

app.set('view engine', 'ejs')
app.set('views', PATH_VIEW_FRONT)
app.use(express.static(PATH_VIEW_FRONT))

consign()
    .include('./backend/routes')
    .then('./backend/controllers')
    .into(app)



module.exports = app