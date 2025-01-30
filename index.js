import express from 'express';
import 'dotenv/config'; // Importa dotenv correctamente
import configs from './src/config/env.js';
import morgan from 'morgan';
import productsRoutes from './src/routes/productsRoutes.js'
const app = express();
app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req,res)=> {
    res.json({Message:"Puerta entrada"})
} )


app.use('/api',productsRoutes)

app.listen(configs.port, () => {
    console.log(`Servidor escuchando por el puerto ${configs.port}`);
});