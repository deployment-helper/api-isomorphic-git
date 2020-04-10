
import { BaseModel } from './Base'
import { Database } from '../constants/'
export class User extends BaseModel {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    constructor(firstName: string, lastName: string, email: string, password: string) {
        super(Database.COLLECTION_NAME);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    save():Promise<any>{
        return super.save(this.toObject());
    }
    toObject(){
        return {
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            password:this.password
        }
    }
}