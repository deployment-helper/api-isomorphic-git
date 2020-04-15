import {router} from '../../../router';
import { Request, Response } from 'express';
import {loginSchema} from '../../../validation'
import { ValidationResult } from '@hapi/joi';
import { ErrorBadReq } from '../../../error';
router.post('/',(req:Request,resp:Response)=>{
  resp.send("Under Development")
});

export {router as authRouter}