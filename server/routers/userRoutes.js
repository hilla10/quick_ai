import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import {
  getPublishedCreations,
  getUserCreations,
  toggleLikeCreation,
} from '../controllers/userController.js';

const router = Router();

router.get('/get-user-creations', auth, getUserCreations);
router.get('/get-published-creations', getPublishedCreations);
router.post('/toggle-like-creation', toggleLikeCreation);

export default router;
