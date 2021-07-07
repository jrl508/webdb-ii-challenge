const express = require('express');
const router = express.Router();
const cars = require('./carsDb');

router.use(express.json());

//GET

router.get('/', (req,res) => {
    cars.get()
        .then( cars => {
            res.status(200).json(cars)
            console.log(cars)
        })
        .catch( err=>{
            res.status(500).json(err)
            console.log(err)
        })
});

router.get('/:id', (req,res)=>{
    const { id } = req.params;

    cars.getById(id)
        .then( car => {
            res.status(200).json(car)
            console.log(car)
        })
        .catch( err => {
            res.status(500).json(err)
            console.log(err)
        })
});

//POST

router.post('/', (req,res) => {
    const car = req.body;

    cars.insert(car)
        .then( car => {
            res.status(201).json(car)
            console.log(car)
        })
        .catch( err => {
            res.status(500).json(err)
            console.log(err)
        })
});

module.exports = router;