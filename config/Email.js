var nodemailer = require('nodemailer')

const email = nodemailer.createTransport({
    service:'gmail',    
    auth: {
        user: "contatocenatecnologia@gmail.com",
        pass: "SOFIA090209"
    },
    
       
})



module.exports = email;