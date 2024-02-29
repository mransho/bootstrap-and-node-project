const express = require("express");
const router = express.Router();
var moment = require("moment");
const User = require("../models/customerSchema");
const userControllers = require("../controllers/userControllers");

//view all customers
router.get("/", userControllers.view_all_customers);

//edit user
router.get("/edit/:id", userControllers.edit_user);

//search user
router.post("/search", userControllers.search_user);

//view add user
router.get("/user/add.html", userControllers.view_add_user);

//add user
router.post("/user/add.html", userControllers.add_user);
//view data user
router.get("/view/:id", userControllers.view_data_user);
//delete
router.delete("/edit/:id", userControllers.delete_user);
//edit
router.put("/edit/:id", userControllers.edit);

module.exports = router;
