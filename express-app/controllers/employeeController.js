const Employee = require("../models/employee");


// ======================
// GET ALL EMPLOYEES
// ======================
const getAllEmployees = async (req, res) => {

    const employees = await Employee.find();

    res.status(200).json(employees);
};


// ======================
// GET EMPLOYEE BY ID
// ======================
const getEmployeeById = async (req, res) => {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json(employee);
};


// ======================
// ADD EMPLOYEE
// ======================
const addEmployee = async (req, res) => {

    const newEmployee = await Employee.create(req.body);

    res.status(201).json({
        message: "Employee Added Successfully",
        data: newEmployee
    });
};


// ======================
// UPDATE EMPLOYEE
// ======================
const updateEmployee = async (req, res) => {

    const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            returnDocument: "after",
            runValidators: true
        }
    );

    if (!updatedEmployee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json({
        message: "Employee Updated Successfully",
        data: updatedEmployee
    });
};


// ======================
// DELETE EMPLOYEE
// ======================
const deleteEmployee = async (req, res) => {

    const deletedEmployee = await Employee.findByIdAndDelete(
        req.params.id
    );

    if (!deletedEmployee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json({
        message: "Employee Deleted Successfully",
        data: deletedEmployee
    });
};


module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};