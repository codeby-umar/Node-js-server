const express = require("express");
const logins = require('./middlewear'); 
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const login = require('./routes/login')
app.use(express.urlencoded({extended : true}));
// app.use(express.static('src'))
app.use(helmet());
app.use('/login' , login)

const config = require('config');
console.log(config.get('name'));
console.log(config.get('mail.host'));
// console.log(config.get('mailserver.password'));

// pugni ornatish 
app.set('view engine' , 'pug')

// app.use(logins);

// if(app.get('env') === 'development'){
//     app.use(morgan('tiny'));
//     console.log("Morgan ishlamoqda.....")
// }


app.get('/' , (req , res)=>{
    res.render('index' , {title : "My first app" , greeting : "Asalomu Allaykum"})
})


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server ${port} portda ishlayapti ...`);
});