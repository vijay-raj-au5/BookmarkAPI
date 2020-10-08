'use strict';

let mongoose = require('mongoose')
let Tag = mongoose.model('Tag');
let Bookmark = mongoose.model('Bookmark')

exports.getAllTags = (req, res) => {
  Tag.find().sort({createdAt: 'desc'}).exec((err, Tags) =>{
    if(err)
      res.send(err);
    res.json(Tags);
  })
}

exports.createTag = (req, res) => {
  let newTag = new Tag(req.body)
  newTag.save((err, savedTag) => {
    if(err)
      res.send(err)
    res.json(savedTag);
  })
}

exports.deleteTag = function(req, res) {
  var id = req.params.id
  Tag.findByIdAndRemove(id, (err, result) => {
    if(err)
      res.send(err);
    let updateCondition = { tag: result.name }
    let updateValue = {$set: { tag: null }}
    let updateOptions = {multi: true}
    Bookmark.update(updateCondition, updateValue, updateOptions)
    res.json(result);
  });
}
