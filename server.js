const express = require('express');

const app = express();
const PORT = 3000;

//*CONFIG
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine());

//*MIDDLEWARE

//* ROUTES

//new
app.get('/', (req, res) => {
    res.render('New')
})

//* LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`)
})