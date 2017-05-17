var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res) {
  db.Data.findAll({
    order: "id ASC"
  })
  .then((element) => {
    res.render('layout', {list: element, title: 'Hacktiv8 List URLs'});
  })
  .catch((err) => {
    console.log(err.message);
  });
});

router.get('/:short_url', function(req, res) {
  db.Data.find({
    where: {
      short_url: req.params.short_url
    }
  })
  .then(url => {
    let sum = url.count;
    url.updateAttributes({
      count: sum + 1
    })
    .then(() => res.redirect('/users'));
  })
  .catch();
});

module.exports = router;
