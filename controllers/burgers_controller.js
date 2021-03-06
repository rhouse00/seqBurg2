var express = require("express");
var db = require("../models");
var router = express.Router();

module.exports = function(router){

	router.get("/", function(req, res){
		db.burger.findAll({
		}).then(function(result){
			var burgObject = {
				burgers: result
			};
			console.log(burgObject);
			// Handle Bar needs an object for this to work!
			res.render("index", burgObject);
		});
	});

	router.post("/", function(req, res){
		db.burger.create({
			burger_name: req.body.burger_name,
			devoured: false
		}).then(function(dbBurger){
			console.log(dbBurger);
			res.redirect("/");
		}).catch(function(error){
			throw error;
		});
	});

	router.put("/:id", function(req, res){
		db.burger.update({
				devoured: req.body.devoured,
				customer: req.body.customer
			},{
				where: {id: req.params.id}
			}).then(function(){
			res.redirect("/");
		});
	});

	router.delete("/:id", function(req, res){
		db.burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(){
			res.redirect("/");
		});
	});

};
