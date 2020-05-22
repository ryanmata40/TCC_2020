module.exports = app => {
    app.post('/signup', app.src.Controllers.signUpUser.save)
    app.post('/signin', app.src.Controllers.signInUser.signin)

//Depois da validação verificar sempre autenticação pelo passport
    app.route('/oi')
        .all(app.src.config.passport.authenticate())
        .get((req, res) => {
            res.status(200).send("Sucesso!")
        });

};