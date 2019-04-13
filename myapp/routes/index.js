var express = require('express');
var router = express.Router();

var users = require('../data');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: users });
});
var id = 6;
router.post('/users', (req, res) => {
  const username = req.body.username;
  const userage = req.body.useAge;
  let usename = {
    name: username,
    age: userage,
    id: id
  }
  users.push(usename);
  res.redirect('/');
  ++id;
  res.end()
})

router.post('/users/:id', (req, res) => {
  const index = users.findIndex(x => x.id == req.params.id);
  users.splice(index, 1);
  res.redirect('/');
})



module.exports = router;
