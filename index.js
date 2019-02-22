var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static ('images'))

app.get('/fruit', function(req, res){
   res.render('fruit', {fruits: ['Windows', 'OSX','Android','IOS'] , foo: 'bar'})
})
 


app.listen(8000)