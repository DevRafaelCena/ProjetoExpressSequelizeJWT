const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req,res,next) => {


    const authHeader = req.headers.authorization;


    if(!authHeader){
        return res.status(401).send({error: 'Token não informado'})
    }

    const parts = authHeader.split(' ') //separa os token em dois exemplo Bearer !@!@2323423wedasda

    if(!parts.length === 2){
        return res.status(401).send({error: 'Token invalido'})
    }

    const [scheme,token] = parts

    if(!/^Bearer$/i.test(scheme)){ //verifica se existe a palavra Bearer na primeira parte do token
        return res.status(401).send({error: "Token sem bearer"})
    }
    
    jwt.verify(token, authConfig.secret,(err,decoded) =>{
        if(err){
            return res.status(401).send({error: 'Token invalidoo'})
        }

        req.userId = decoded.id
        return next()
    })
}