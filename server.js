const express = require('express');
const connectDB = require('./config/db');

const users = require('./src/routes/api/users');
const auth = require('./src/routes/api/auth');
const products = require('./src/routes/api/products');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/products', products);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
