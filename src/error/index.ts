class BaseError extends Error{
    public statusCode:number;
    public name:string;
    public message:string;
    public help:string;
    public error:string; 
    constructor(error:string,statusCode:number,name:string, message:string,help:string){
        super();
        this.error = error;
        this.statusCode = statusCode;
        this.name = name;
        this.message = message;
        this.help = help;
    }
}

class ErrorBadReq extends BaseError{
    constructor(error:string){
        super(error,400,"BadRequest","Invalid request pyalod","https://stackoverflow.com/search?q=bad+request");
    }
}

export {ErrorBadReq}