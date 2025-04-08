import { Router } from 'express';
import { createUserController, fetchUsersFromAPI, getAllUsersController } from '../controllers/user.controller';

const router = Router();

router.post('/fetch', fetchUsersFromAPI);
router.post('/', createUserController);
router.get('/', getAllUsersController);

export default router;