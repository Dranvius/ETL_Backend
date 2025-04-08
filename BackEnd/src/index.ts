//Rutas
import app from './app';
import Express,{Request,Response} from "express";
import cors from "cors";


//!Definir un puerto
const PORT = process.env.PORT || 3000;

//Control de solicitudes por medio de CORS

app.use(() => {
    cors({
        origin:`http://localhost:${PORT}`
    })
});

//!Abrir puertos

app.listen(PORT, () => {
    console.log(`Server en http://localhost:${PORT}`);
});


//!Default Rutas


//!Interfaces para los datos internos de las solicitudes.
    // *type Params = { id: string };
//? Uso
    //* req: Request<Params>

    //*Configuracion de Cors



//?Ruta para solicitud.

app.get('/health', (req:Request, res:Response) => {
    res.json({ status: 'ok' });
  });
  

//?Ruta Prueba

app.get("/", (req:Request, res:Response) => {
    res.send("Saludo desde server");
});



  