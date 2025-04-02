const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

    // saving todos
    router.post('/', async(req, res)=>{
        try {
                const data = req.body;
                const newTodo = new Todo(data);
                const response = await newTodo.save();
                res.status(200).json('Data saved', response);
                    
        } catch (err) {
                 console.log(err);
                 res.status(500).json({error: 'Internal Server Error'});
         }
     });

    //getting list of todos 
    router.get('/',  async(req, res)=>{
        try {
            const data = await Todo.find();
            console.log('data feteched');
            res.status(200).json(data);

        } catch(err) {
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });

        
    //getting todos by id
    router.get('/:id', async(req, res)=>{
        try {
              const userId = req.params.id;
              const user = await Todo.findById(userId);
              res.status(200).json({user});
        } catch (err) {
            console.error(err);
                res.status(500).json({error: 'Internal Server Error'});
        }
        });

    

    //update todos
    router.put('/:id', async(req, res)=>{
            try {
                const todoID = req.params.id;
                const updatedData = req.body;
                const response = await Todo.findByIdAndUpdate(todoID, updatedData, {
                new: true,
                runvalidators: true

                });
                if(!response){res.status(404).json({error: 'Todo not found'});}

                console.log('Data updated',response);
                res.status(200).json(response);
                
            } catch (err) {
                    console.log(err);
                    res.status(500).json({error: 'Internal Server Error'});
            }
        });

     //Delete person
    router.delete('/:id', async(req, res)=>{
            try {
                const todoID = req.params.id;
                const response = await Todo.findByIdAndDelete(todoID);

                if(!response){
                    res.status(404).json({error: 'Record not found'});
                    
                }
            
                console.log('Data deleted');
                res.status(200).json({message: "Todo deleted sucessfully"});
                
            } catch (err) {
                    console.log(err);
                    res.status(500).json({error: 'Internal Server Error'});
            }
        });

    module.exports= router;
