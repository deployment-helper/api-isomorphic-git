import {Router,Request,Response} from 'express';
import {userSchema} from '../../../validation';
import { ValidationResult } from '@hapi/joi';
import {ErrorBadReq} from '../../../error'
import {User} from '../../../model/User';
import {customErrorHandler} from '../../../middleware'
const router:Router = Router();
router.use(customErrorHandler);
router.post('/',(req:Request,resp:Response)=>{
    const body:any = req.body;
    const validationResult:ValidationResult =  userSchema.validate(body);
    if(validationResult.error){
        throw new ErrorBadReq(validationResult.error.message);
    }
    const user = new User(body.firstName,body.lastName,body.email,body.password);
    user.save().then((writeResult:any)=>{
        console.log(writeResult);
        resp.status(200).send(writeResult);
    });
    
});


export {router as userRouter}