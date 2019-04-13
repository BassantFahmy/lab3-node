var express = require('express');
var edit = express.Router();

// edit.get('/', function (req, res, next) {

// });
edit.get('/edit/:id', (req, res) => {
    res.render('edit', { id: req.params.id });
})

edit.post('/edit/:id', (req, res) => {
    const index = users.findIndex(x => x.id == req.params.id);
    users[index].name = req.body.editname;
    users[index].age = req.body.editAge;
    res.redirect('/');
})


module.exports = edit;
