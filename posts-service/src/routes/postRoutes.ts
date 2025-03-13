import { Router } from 'express';
import { PostController } from '../controllers/postController';
import { authenticateJWT } from '../middleware/authMiddleware';

const router = Router();
const postController = new PostController();

export const setPostRoutes = (app: any) => {
    router.post('/posts', authenticateJWT, postController.createPost.bind(postController));
    router.get('/posts/:id', authenticateJWT, postController.getPost.bind(postController));
    router.put('/posts/:id', authenticateJWT, postController.updatePost.bind(postController));
    router.delete('/posts/:id', authenticateJWT, postController.deletePost.bind(postController));

    app.use(router);
};