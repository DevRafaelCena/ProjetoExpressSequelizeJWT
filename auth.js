
const LocalStrategy = require('passport-local').Strategy;

const {
    Usuario
  } = require('./models') 

module.exports = function (passport) {
    
    function findUser(login) {
        return users.find(user => { console.log(user.login)
             return user.login == login });
    }

    function findUserById(id) {        
        return users.find(user => user.id == id);
    }

    passport.serializeUser((user, done) => {
        console.log("serialize : " + user)
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        try {
            const user = findUserById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
      async  (username, password, done) => {

            try {
                
                const dados = await Usuario.findAndCountAll().then(result => {
                   users = result.rows                   
                  })

                  console.log(users)
                
                  //  console.log(rows)
                }catch (err) {console.log(err)}
        
        
            try {
                const user = findUser(username);

                // usuário inexistente
                if (!user) { return done(null, false) }

                // comparando as senhas
                console.log('comparando senha ' + password)
                const isValid = password == user.senha;
                console.log(isValid)
                if (!isValid) return done(null, false)
                
                return done(null, user.id)
            } catch (err) {
                done(err, false);
            }
        }
    ));
}