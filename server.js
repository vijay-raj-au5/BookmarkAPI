var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Bookmark = require('./api/models/bookmarksModel'),
  Tag = require('./api/models/tagsModel'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  env = require('dotenv').config();


app.use(cors());
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL,
  {useNewUrlParser: true},
  console.log("Connected to mongodb"));



mongoose.set('useCreateIndex', true);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./api/routes/bookmarksRoute')(app);
require('./api/routes/tagsRoute')(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
