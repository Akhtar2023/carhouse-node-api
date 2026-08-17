const Supplier = require("../models/supplier");

// ======================
// GET ALL SUPPLIERS
// ======================
const getAllSuppliers = async (req, res) => {

    const suppliers = await Supplier.find();

    res.status(200).json(suppliers);
};


// ======================
// GET SUPPLIER BY ID
// ======================
const getSupplierById = async (req, res) => {

    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
        return res.status(404).json({
            message: "Supplier Not Found"
        });
    }

    res.status(200).json(supplier);
};


// ======================
// ADD SUPPLIER
// ======================
const addSupplier = async (req, res) => {

    const newSupplier = await Supplier.create(req.body);

    res.status(201).json({
        message: "Supplier Added Successfully",
        data: newSupplier
    });
};


// ======================
// UPDATE SUPPLIER
// ======================
const updateSupplier = async (req, res) => {

    const updatedSupplier = await Supplier.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            returnDocument: "after",
            runValidators: true
        }
    );

    if (!updatedSupplier) {
        return res.status(404).json({
            message: "Supplier Not Found"
        });
    }

    res.status(200).json({
        message: "Supplier Updated Successfully",
        data: updatedSupplier
    });
};


// ======================
// DELETE SUPPLIER
// ======================
const deleteSupplier = async (req, res) => {

    const deletedSupplier = await Supplier.findByIdAndDelete(
        req.params.id
    );

    if (!deletedSupplier) {
        return res.status(404).json({
            message: "Supplier Not Found"
        });
    }

    res.status(200).json({
        message: "Supplier Deleted Successfully",
        data: deletedSupplier
    });
};


module.exports = {
    getAllSuppliers,
    getSupplierById,
    addSupplier,
    updateSupplier,
    deleteSupplier
};