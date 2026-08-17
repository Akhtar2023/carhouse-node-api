const express = require("express");

const router = express.Router();

const supplierController = require("../controllers/supplierController");


// GET ALL
router.get("/", supplierController.getAllSuppliers);

// GET BY ID
router.get("/:id", supplierController.getSupplierById);

// POST
router.post("/", supplierController.addSupplier);

// PUT
router.put("/:id", supplierController.updateSupplier);

// DELETE
router.delete("/:id", supplierController.deleteSupplier);


module.exports = router;