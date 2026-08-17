const Car = require("../models/car");


// ======================
// GET ALL CARS
// ======================
const getAllCars = async (req, res) => {

    const cars = await Car.find();

    res.status(200).json(cars);
};


// ======================
// GET CAR BY ID
// ======================
const getCarById = async (req, res) => {

    const car = await Car.findById(req.params.id);

    if (!car) {
        return res.status(404).json({
            message: "Car Not Found"
        });
    }

    res.status(200).json(car);
};


// ======================
// ADD NEW CAR
// ======================
const addCar = async (req, res) => {

    console.log("CAR BODY:", req.body);

    const newCar = await Car.create(req.body);

    res.status(201).json({
        message: "Car Added Successfully",
        data: newCar
    });
};


// ======================
// UPDATE CAR
// ======================
const updateCar = async (req, res) => {

    const updatedCar = await Car.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!updatedCar) {
        return res.status(404).json({
            message: "Car Not Found"
        });
    }

    res.status(200).json({
        message: "Car Updated Successfully",
        data: updatedCar
    });
};


// ======================
// DELETE CAR
// ======================
const deleteCar = async (req, res) => {

    const deletedCar = await Car.findByIdAndDelete(
        req.params.id
    );

    if (!deletedCar) {
        return res.status(404).json({
            message: "Car Not Found"
        });
    }

    res.status(200).json({
        message: "Car Deleted Successfully",
        data: deletedCar
    });
};


module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};