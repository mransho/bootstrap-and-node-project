const express = require("express");
const router = express.Router();
var moment = require("moment");
const User = require("../models/customerSchema");

//view all customers
const view_all_customers = (req, res) => {
  console.log("2")
  User.find()
    .then((result) => {
      res.render("index", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

//edit user
const edit_user = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { Obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

//search user
const search_user = (req, res) => {
  const searchText = req.body.searchText.trim();
  User.find({ $or: [{ FirstName: searchText }, { LastName: searchText }] })
    .then((result) => {
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

//view add user
const view_add_user = (req, res) => {
  res.render("user/add");
};

//add user
const add_user = (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

//view data user
const view_data_user = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/view", { Obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};
//delete
const delete_user = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
//edit
const edit = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  view_all_customers,
  edit_user,
  search_user,
  view_add_user,
  add_user,
  view_data_user,
  delete_user,
  edit,
};
