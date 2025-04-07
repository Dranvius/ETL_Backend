
import {Router} from 'express';
//!Controladores
import {profileHandler} from '../controllers/autentificacion.controller.js'
//!Ejecuciòn de la funciòn ROTER (LINEA_1
const router = Router();

//Construcción de rutas
router.get('/login',verificador,profileHandler)


//!Exportando rutas
export default router;
