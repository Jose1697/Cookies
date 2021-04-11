const express = require('express')
const session = require('express-session')

const app = express();

app.use(session({    //Definiendo la sesion
    resave: false,   //Que no me guarde la cookie cada vez q se haga un cambio
    saveUninitialized: false,   //Si la cookie no se ha inicializado que no me la guarde por defecto
    secret: "keyboard cat"   //se le define un secret
}));

app.get('/',(req, res)=>{   //definiendo una ruta: en el home vamos hacer uso de nuestra sesion
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.status(200).json({ hello: "world", counter: req.session.count}) 
})

app.listen(3000, () => {
    console.log("Listening http://localhost:3000");
})
