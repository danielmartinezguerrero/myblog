import { Router } from 'express';
import { getAllPosts, getPostById, createPost } from '../controllers/postController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', authenticate, createPost);

export default router;