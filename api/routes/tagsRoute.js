'use strict';


let tagControl = require('../controllers/tagsController');


module.exports = (app) => {
  app.route('/tags')
    .get(tagControl.getAllTags)
    .post(tagControl.createTag)

  app.route('/tags/:id')
      .delete(tagControl.deleteTag)
}
