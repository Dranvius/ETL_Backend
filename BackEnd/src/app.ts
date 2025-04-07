import Express,{Request,Response} from 'express';
import healthRoutes from './routes/health.routes'; //RUTAS
import morgan from "morgan";

//!Instancia de app
const app = Express();

//!Funciones necesarias paras el correcto funcionamiento del servidor
app.use(morgan("dev"));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

//Rutas Desde health
app.use('/health', healthRoutes);

export default app;