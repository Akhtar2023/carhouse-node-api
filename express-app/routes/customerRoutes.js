const express = require("express");

const router = express.Router();

const customerController = require("../controllers/customerController");


// GET ALL CUSTOMERS
router.get("/", customerController.getAllCustomers);


// GET CUSTOMER BY ID
router.get("/:id", customerController.getCustomerById);


// POST CUSTOMER
router.post("/", customerController.addCustomer);


// UPDATE CUSTOMER
router.put("/:id", customerController.updateCustomer);


// DELETE CUSTOMER
router.delete("/:id", customerController.deleteCustomer);


module.exports = router;