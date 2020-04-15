import {  Document } from 'mongoose';
interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export {IUser}