const {authSecrets} = require('../../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
  const signin = async (req, res) => {

    if(!req.body.email || !req.body.password){
        return res.status(400).send('Dados incompletos!')
    }

    const user = await app.connection('users')
      .whereRaw("LOWER(email) = LOWER(?)",req.body.email)
      .first() 
 
    if(user){
        bcrypt.compare(req.body.password, user.password_hash, (err, isMatch) => {
          if (err || !isMatch){
            return res.status(400).send("Usuário Inválido!")
          } //compara a senha do banco com a senha daa request

          const payload = {email: user.email}

          res.json({
            name: user.name,
            email: user.email,
            token: jwt.encode(payload, authSecrets)
          }); //response header
          
        });
    }else{
        res.status(400).send("Usuário Inválido!")
    };

  };
  return {signin}
}