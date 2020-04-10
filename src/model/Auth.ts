import { BaseModel } from "./Base";
import { Database } from "../constants";

class Auth extends BaseModel{
    constructor(){
        super(Database.COLLECTION_NAME);
    }
    async  validate(email: string, password: string): Promise<any> {
        const querySnapshot: FirebaseFirestore.QuerySnapshot =  await this.colRef.where('email','==',email).where('password','==',password).get();
        return !querySnapshot.empty;
    }
}

export {Auth};