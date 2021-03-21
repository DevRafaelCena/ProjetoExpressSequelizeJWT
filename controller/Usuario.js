//const Sequelize = require("sequelize")  //importa sequelize
//const config = require('../config/database') //importa as configrações do banco
const {
  Usuario
} = require('../models') //importa o index.js
var path = require('path');
var moment = require('moment');
const jwt = require('jsonwebtoken'); //token
const authconfig = require('../config/auth.json') //secreto do token

let Usuarios = {

  auth: async (req, res) => {
    const {username,password} = req.body

    const user = await Usuario.findOne({
      where: {
        login:username
      }
    })

    if(!user){ //verifica se achou usuario
      return res.status(400).send({error: "senha ou usuario invalido"})
    }
    if(password != user.senha){ //verifica se a senha esta igual
      return  res.status(400).send({error: "senha ou usuario invalido"})

    }

    user.senha = undefined //reseta a senha para não ir pro front


    const token = jwt.sign({id:user.id},authconfig.secret, {
      expiresIn: 86400, //tempo para expirar
    })  //inicia e passa o secreto

    res.status(200).send({user,token})



  },

  listaTodos: async (req, res) => {

    const result = await Usuario.findAll()
    console.log("All users:", JSON.stringify(result, null, 2));

    res.status(200).json(result)
  },

  create: async (req, res) => {

    const {
      nome,
      email,
      documento,
      cpf,
      senha,
      login,
      tipo_usuario
    } = req.body

    const hoje = moment().format('DD-MM-YYYY HH:mm:ss')

    try {
      const criar = await Usuario.create({
        nome,
        email,
        documento,
        cpf,
        senha,
        login,
        tipo_usuario,
        status: true,
        created_at: hoje
      })
      res.status(200).json(criar)
    } catch (err) {

      res.status(400).json(err)
    }
  },

  update: async (req, res) => {
    try {
      const {
        nome,
        email,
        documento,
        cpf,
        senha,
        login,
        tipo_usuario
      } = req.body
      const {
        id
      } = req.params

      console.log(id)
      const hoje = moment().format('DD-MM-YYYY HH:mm:ss')
      const edita = await Usuario.update({
        nome,
        email,
        documento,
        senha,
        login,
        tipo_usuario,
        status: true,
        update_at: hoje
      }, {
        where: {
          id:id
        }
      })
      res.status(200).json(edita)

    } catch (err) {

      res.status(400).json(err)
    }
  }

}
module.exports = Usuarios