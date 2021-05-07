const { response } = require("express");
const db = require("../models");
const Model = db.models;
const { sort } = require('../helper/helper')

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const models = new Model({
    name: req.body.name,
    age: req.body.age,
    marks: req.body.marks 
  });

  models
    .save(models)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating."
      });
    });
};

exports.getallAge = (req, res) => {
  Model.find()
    .then(data => {
        let arr=[];                                                                   
        for(let i = 0; i < data.length; i++) {                  
           arr[i]=data[i].age
        }
        
         res.send( JSON.stringify(sort(arr)));              
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred "
      });
    });
};

exports.getcountMarks = (req, res) => {
    Model.find()
      .then(data => {
          
          let arr=[];                                                                   
          for(let i = 0; i < data.length; i++) {                  
             arr[i]=data[i].marks
             console.log(arr);
          }
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
         var count=arr.reduce(reducer);
         res.send( {count});              
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });
      });
  };
