'use strict';
var uuidv4 = require('uuid');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var bookmarkSchema = new Schema ({

  _id: {
    type:String,
    default: uuidv4 
  },
  
  title: {
    type: String,
    required: "Please enter a title for bookmark"
  },

  link: {
    type: String,
    required: "Please enter a valid URL",
    unique: true
  },

  publisher: {
    type: String,
    required: "Please enter publisher name for bookmark"
  },

  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  }],

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema)


