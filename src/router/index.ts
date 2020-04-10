import {Router} from 'express';
import {customErrorHandler} from '../middleware';
const router = Router();
router.use(customErrorHandler);
export {router};