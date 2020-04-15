import { Request, Response } from "express";
import {ErrorBadReq} from '../error';
import logger from '../logger';
function customErrorHandler(err:Error,req:Request,resp:Response,next:any){
    logger.error(err.message);
    if(!resp.headersSent){
        if(err instanceof ErrorBadReq){
            resp.sendStatus(err.statusCode).send(err);
        }else{
            resp.sendStatus(500).send(err);
        }
    }
}

export {customErrorHandler};