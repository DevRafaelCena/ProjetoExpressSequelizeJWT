var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth')

const UsuarioController = require('../controller/Usuario');

/* GET users listing. */

router.use(authMiddleware)
router.get('/lista',UsuarioController.listaTodos)

router.post('/cadastrar', UsuarioController.create)

router.put('/editar/:id', UsuarioController.update)




module.exports = router;
