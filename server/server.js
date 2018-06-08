require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , controller = require('./controller')
    ,bodyparser = require('body-parser')


    const { 
        SERVER_PORT,
        SESSION_SECRET,
        DOMAIN,
        CLIENT_ID,
        CLIENT_SECRET,
        CALLBACK_URL,
        CONNECTION_STRING,
    } = process.env;

     massive(CONNECTION_STRING).then(db => {
        app.set('db', db);
    })

    const app = express();
    app.use(bodyparser.json())

    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))


    app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    // done(null, profile); this is for testing
        const db = app.get('db')
        let{ id, displayName, picture } = profile;
        db.find_user([id]).then(user => {
            if(user[0]) {
                done(null, user[0].id)
            } else {
                db.create_user([displayName, picture, id]).then((createdUser) => {
                    done(null, createdUser[0].id)
                })
            }
     })
}))

passport.serializeUser((primaryKeyID, done) => {
    done(null, primaryKeyID);
})
passport.deserializeUser((primaryKeyID, done) => {
    app.get('db').find_session_user([primaryKeyID]).then(user => {
        done(null, user[0]);
    })
    //what ever profile comes out of here. Can be accessible as req.user
    //If you remember one thing about authentication remember this can be used as req.user.
})


app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000')
})
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard'
    //connection: 'github'
}))
app.get('/auth/user', (req,res) => {
    if(req.user){
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Nice Try')
    }
})
app.get('/api/getposts', controller.getposts)
app.post('/api/addpost', controller.addpost)
   
    
const port = 3030
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: `, SERVER_PORT)
})