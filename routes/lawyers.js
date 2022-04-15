var express = require('express');
var router = express.Router();

/* GET attorneys listing. */
router.get('/lawyers', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;