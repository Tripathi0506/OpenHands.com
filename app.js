if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const express = require('express')
const Users = require('./models/user')
const app = express()

const path = require('path')

mongoose.connect(process.env.URL_MONGO)
    .then(async () => {
        console.log('Mongo Open')
        app.listen(5000,()=>{
            console.log('opend 5000')
        })
    })
    .catch(async (err) => {
        console.log('Mongoose Error')
        console.log(err)
    })

app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', async (req,res) => {
    res.render('./index.ejs')
})
app.post('/donate', async (req, res) => {
    const userdetail = new Users(req.body.userDitail)
    await userdetail.save()
    res.redirect('/')
})

app.get('/signup', async (req,res) => {
    res.render('./signup.ejs')
})

app.get('/aboutus', async (req,res) => {
    res.render('./about.ejs')
})

app.get('/contact', async (req,res) => {
    res.render('./contact.ejs')
})

app.get('/gallery', async (req,res) => {
    res.render('./gallery.ejs')
})

app.get('/causes', async (req,res) => {
    res.render('./causes.ejs')
})

app.get('/causes-single', async (req,res) => {
    res.render('./causes-single.ejs')
})
