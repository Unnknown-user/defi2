let express = require('express');
let app = express();
let bodyParser = require("body-parser")




app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
 
app.get('/', (request, response) => {
    response.render(__dirname + '/views/frontend/index', )
})


app.listen(8080)