
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
    async validate(email: string, password: string): Promise<any> {
        const querySnapshot: FirebaseFirestore.QuerySnapshot =  await this.colRef.where('email','==',email).where('password','==',password).get();
        return querySnapshot.empty;
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