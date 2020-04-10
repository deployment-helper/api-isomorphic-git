import {router} from "../../router";
import {userRouter} from './user';
import {authRouter} from './auth';
router.use('/user',userRouter);
router.use('/auth',authRouter);

export {router as v1Router}