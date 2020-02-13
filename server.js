const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan')
const users = require('./src/routes/users');
const auth = require('./src/routes/auth');
const products = require('./src/routes/products');

const app = express();


app.use(express.json({ extended: false }));

app.use(morgan('dev'))
app.use(morgan('common'))
app.use(morgan('short'))

// here custom token is created. instead of "body" you can use any object from "req" 
morgan.token('body',(req,res)=>{
    return console.log(JSON.stringify(req.body));
    
})
app.use(morgan(' :method :url  :body :response-time '))

connectDB();

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/products', products);

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
