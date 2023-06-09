require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//*DATA
const Log = require('./models/logs');

const app = express();
const PORT = 3000;

//*CONFIG
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine());

//*MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//* ROUTES

//home
app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, captain log!</h1>
        <h3><a href='/logs'>Let's get started...</a></h3>
    `)
})

//index route
app.get('/logs', (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render('logs/Index', {logs: allLogs})
    })
})

//new route: form
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

//create route: POST
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    // res.send(req.body)
    Log.create(req.body, (error, createdLog) => {
        // res.send(createdLog)
        // at the point the way you access the newly created info in this code is through the created log variable
        res.redirect(`/logs/${createdLog._id}`)
    })
})

//edit route: edit form
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if(!error){
            res.render('logs/Edit', {log: foundLog})
        } else {
            res.send({msg: error.message})
        }
    })
})

//update route: to update data based on edit
app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedLog) => {
        res.redirect(`/logs/${req.params.id}`)
    })
})

//*Seed route

app.get('/logs/seed', (req, res) => {
    Log.create([
        {
            title: 'Vernal Equinox',
            entry: 'As we hear land, the bugs grow plenty.',
            shipIsBroken:false
        },
        {
            title: '5th day of 2nd month',
            entry: 'Docked to restock and touch grass.',
            shipIsBroken:true
        },
        {
            title: '1st day of 3rd month',
            entry: 'We have oranges. One crew short and two new, we set out once more.',
            shipIsBroken:false
        },
    ], (err, data) => {
    res.redirect('/logs');
    })
});

//show route
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, foundLogs) => {
        res.render('logs/Show', {log: foundLogs})
    })
})

//delete route
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (error, deletedLog) => {
        //res.send(deletedLog)
        res.redirect('/logs')
    })
})

//wildcard
app.get('*', (req, res) => {
    res.render('404')
})

//* LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`);
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})