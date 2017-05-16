var express = require('express');
var router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({ extended: false});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hacktiv8 URL Shortener' });
});

router.get('/urls', function(req, res) {
  res.render('form', {title: 'Simplify your links:'});
});

router.post('/urls', parseUrlEncoded, function(req, res) {
  db.Data.create({
    url: req.body.url
  })
  .then(() => {
    console.log('\nInsert todo success!\n');
    res.redirect('/');
  })
  .catch(err => console.log(err.message));
});

module.exports = router;
