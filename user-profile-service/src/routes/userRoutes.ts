import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authenticateJWT } from '../middleware/authMiddleware';
import { UserService } from '../services/userService';

const userService = new UserService();
const userController = new UserController(userService);
const router = Router();

export const setUserRoutes = (app: any) => {
    router.post('/users', userController.createUser.bind(userController));
    router.get('/users/:id', authenticateJWT, userController.getUser.bind(userController));
    router.put('/users/:id', authenticateJWT, userController.updateUser.bind(userController));
    router.delete('/users/:id', authenticateJWT, userController.deleteUser.bind(userController));

    app.use(router);
};