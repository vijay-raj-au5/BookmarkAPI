'use strict';

let bookmarkControl = require('../controllers/bookmarksController');


module.exports = (app) => {
  app.route('/bookmarks')
      .get(bookmarkControl.getAllBookmarks)
      .post(bookmarkControl.createBookmark);

  app.route('/bookmarks/:id')
      .get(bookmarkControl.getBookmarkById)
      .delete(bookmarkControl.deleteBookmark)

  app.route('/bookmarks/:bid/folder/:fid')
      .put(bookmarkControl.updateBookmarkWithFolder)
}
