var express = require('express');
var router = express.Router();
const UsuarioController = require('../controller/Usuario');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authentication',UsuarioController.auth)


module.exports = router;
