const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
   
}) 

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;