import express from 'express';
import 'dotenv/config'; // Importa dotenv correctamente
import configs from './src/config/env.js';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/',(req,res)=> {
    res.json({Message:"Puerta entrada"})
} )


app.listen(configs.port, () => {
    console.log(`Servidor escuchando por el puerto ${configs.port}`);
});