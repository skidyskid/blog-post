import { getUserInfo, updateUser } from '../controllers/user/user.js';
import { uploadIcon } from '../middlewares/uploadIcon.js';
import { Router } from 'express';
import { verifyToken } from '../middlewares/user/verifyToken.js';

const router = Router();

router.get('/', verifyToken, getUserInfo);
router.post('/', verifyToken, uploadIcon.single('image'), updateUser);

export default router;
