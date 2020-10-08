'use strict';

let mongoose = require('mongoose')
let Bookmark = mongoose.model('Bookmark');

exports.getAllBookmarks = (req, res) => {
  let query = Bookmark.find();
  query.sort({createdAt:'desc'})
      .exec((err, fetchedBookmarks) =>{
        if(err)
          res.send(err);
        res.json(fetchedBookmarks)
      });
  }

exports.createBookmark = (req, res) => {
  let newBookmark = new Bookmark(req.body)
  newBookmark.save((err, savedBookmark) => {
    if(err)
      res.send(err);
    res.json(savedBookmark);
  })
}

exports.updateBookmarkWithFolder = function(req, res) {
  var bookmark = req.params.bid
  var tag = req.params.fid
  console.log(folder)
  var query = Bookmark.findByIdAndUpdate(bookmark, {
    tag: tag
  });
  query.exec(function(err, result){
    console.log(result)
      res.send(result);
    });
}

exports.getBookmarkById = function(req, res) {
  var id = req.params.id
  var query = Bookmark.findById(id);
  query.exec(function(err, result){
      res.send(result);
    });
}

exports.deleteBookmark = function(req, res) {
  var id = req.params.id
  Bookmark.findByIdAndRemove(id, (err, result) => {
    if(err)
      res.send(err);
    res.json(result);
  });
}
