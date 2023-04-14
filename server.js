const express = require('express');

const app = express();
const PORT = 3000;

//*CONFIG
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine());

//*MIDDLEWARE
app.use(express.urlencoded({extended: false}))

//* ROUTES

//home
app.get('/', (req, res) => {
    res.send('Hello, captain log!')
})

//new route: form
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//create route: POST
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    res.send(req.body)
})

//* LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`)
})