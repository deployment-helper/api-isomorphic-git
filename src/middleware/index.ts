import { Request, Response } from "express";
import {ErrorBadReq} from '../error';
function customErrorHandler(err:Error,req:Request,resp:Response,next:any){
    if(!resp.headersSent){
        if(err instanceof ErrorBadReq){
            resp.sendStatus(err.statusCode).send(err);
        }else{
            resp.sendStatus(500).send(err);
        }
    }
}

export {customErrorHandler};