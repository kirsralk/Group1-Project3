const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.Post.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post.update(
      {_id: req.params.id},
      {$push: {replies: req.body}}
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
