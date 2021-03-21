var path = require( 'path' );
const Email = require ('../config/Email');
const { response } = require('../app');
const email = require('../config/Email');

const {
    Usuario
  } = require('../models')

let formEmail = {

    enviarEmail: async (req,res)=>{
        const {id} = req.params

        const buscaDados = await Usuario.findOne({Where:{id:id}})
            
        console.log(buscaDados.email)
      
        
           let emailEnvio ={
            from: '"Resete de senha de acesso : "<'+ buscaDados.email +">", // sender address (who sends)
            to: buscaDados.email, // list of receivers (who receives)
            subject: 'Resete de senha de acesso', // Subject line
            text: 'Solicitação de resete de senha', // plaintext body
            html: `<h1>Usuario: ${buscaDados.nome}</h1>
           <p> Solicitação de resete de senha no sistema Cena Atas</p>
           <p> usuario: <strong> ${buscaDados.login}  </strong> </p> 
           <p> NovaSenha: <strong> ${buscaDados.senha}  </strong> </p>`// html body

        }
        // send mail with defined transport object
Email.sendMail(emailEnvio, function(error, info){
    if(error){
        console.log("deu erro : " + error)
         return res.status(400).json({
            error: true,
            msg: "Não foi possivel enviar o email!",
            erro: error
          });
    }

    console.log('Message sent: ' + info.response);
    return res.status(200).json({
        error: false,
        msg: "Email enviado",
      });
    
});
 
    }

}
 


module.exports = formEmail    