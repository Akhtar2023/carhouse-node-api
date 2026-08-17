const Customer = require("../models/customer");


// ======================
// GET ALL CUSTOMERS
// ======================
const getAllCustomers = async (req, res) => {

    const customers = await Customer.find();

    res.status(200).json(customers);
};


// ======================
// GET CUSTOMER BY ID
// ======================
const getCustomerById = async (req, res) => {

    const customer = await Customer.findById(req.params.id);

    if (!customer) {
        return res.status(404).json({
            message: "Customer Not Found"
        });
    }

    res.status(200).json(customer);
};


// ======================
// ADD CUSTOMER
// ======================
const addCustomer = async (req, res) => {

    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
        message: "Customer Added Successfully",
        data: newCustomer
    });
};


// ======================
// UPDATE CUSTOMER
// ======================
const updateCustomer = async (req, res) => {

    const updatedCustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            returnDocument: "after",
            runValidators: true
        }
    );

    if (!updatedCustomer) {
        return res.status(404).json({
            message: "Customer Not Found"
        });
    }

    res.status(200).json({
        message: "Customer Updated Successfully",
        data: updatedCustomer
    });
};


// ======================
// DELETE CUSTOMER
// ======================
const deleteCustomer = async (req, res) => {

    const deletedCustomer = await Customer.findByIdAndDelete(
        req.params.id
    );

    if (!deletedCustomer) {
        return res.status(404).json({
            message: "Customer Not Found"
        });
    }

    res.status(200).json({
        message: "Customer Deleted Successfully",
        data: deletedCustomer
    });
};


module.exports = {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
};