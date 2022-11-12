const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const asistenteRoutes = require('./routes/asistenteRoutes')

app.use(cors())
app.use(express.json())
app.options("*", cors())
app.use('/api', asistenteRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server started and the url is http://localhost:' + process.env.PORT);

});

mongoose.set('useFindAndModify', false); 
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB,(err) => {
    if(err){
        console.log('Error al conectarse en la base de datos');
    }
    return console.log('Se conecto a la base de datos')
});

