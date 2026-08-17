const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");


// GET ALL
router.get("/", employeeController.getAllEmployees);


// GET BY ID
router.get("/:id", employeeController.getEmployeeById);


// POST
router.post("/", employeeController.addEmployee);


// PUT
router.put("/:id", employeeController.updateEmployee);


// DELETE
router.delete("/:id", employeeController.deleteEmployee);


module.exports = router;