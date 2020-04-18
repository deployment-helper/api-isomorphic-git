import { Request, Response } from "express";
import { ErrorBadReq } from "../error";
function customErrorHandler(
  err: Error,
  req: Request,
  resp: Response,
  next: any
) {
  if (resp.headersSent) {
    return next(err);
  }
  if (err instanceof ErrorBadReq) {
    return resp.status(err.statusCode).send(err);
  }
  resp.status(500).send(err);
}

export { customErrorHandler };
