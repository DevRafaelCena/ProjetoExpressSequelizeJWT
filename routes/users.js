var express = require('express');
var router = express.Router();

/* GET users listing. */

//email de resete de senha
const ReseteSenhaController = require('../controller/ReseteSenha');

router.post('/resete/:id',ReseteSenhaController.enviarEmail)

module.exports = router;
