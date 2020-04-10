import { Request, Response } from "express";
import {ErrorBadReq} from '../error';
function customErrorHandler(err:Error,req:Request,resp:Response,next:any){
    if(err instanceof ErrorBadReq){
        resp.status(err.statusCode).send(err);
    }else{
        resp.status(500).send(err);
    }
}

export {customErrorHandler};