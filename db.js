const mongoose = require('mongoose');
require('dotenv').config();

const dbUrlLocal = process.env.MONGODB_URL_LOCAL;

const db =mongoose.connect(dbUrlLocal, { 
    useNewUrlParser: true,
    useUnifiedTopology: true })
db.then(() => {
console.log('Connected to MongoDB Server');
}).catch(err => {
console.error('Error connecting to MongoDB Server', err);
});

module.exports= db;