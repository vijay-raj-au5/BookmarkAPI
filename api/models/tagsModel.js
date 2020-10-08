'use strict';
var uuidv4 = require('uuid');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TagSchema = new Schema ({

  _id: {
    type:String,
    default: uuidv4
  },

  title: {
    type: String,
    required: "Please enter a folder name",
    unique: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Tag', TagSchema)
