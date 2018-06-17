const express = require('express');
const router = express.Router({});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { title: 'Express', root: 'views'});
});

module.exports = router;
