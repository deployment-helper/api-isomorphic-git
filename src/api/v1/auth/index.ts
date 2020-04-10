import {router} from '../../../router';
import { Request, Response } from 'express';
import {Auth} from '../../../model/Auth';
import {loginSchema} from '../../../validation'
import { ValidationResult } from '@hapi/joi';
import { ErrorBadReq } from '../../../error';
router.post('/',(req:Request,resp:Response)=>{
    const auth = new Auth();
    const body:any = req.body;
    const validationResult:ValidationResult = loginSchema.validate(body);
    if(validationResult.error){
        throw new ErrorBadReq(validationResult.error.message);
    }else{
        auth.validate(body.email,body.password).then((isValid)=>{
            if(isValid){
                resp.status(200).send("Login successfully");
            }else{
                resp.status(200).send("Login Faild");
            }
            
        });
    }
});

export {router as authRouter}