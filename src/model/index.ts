import mongoose from 'mongoose';
import {Config} from '../config';
import User from './user.model'
console.log(Config.DB_CONNECTION_STRING);
mongoose.connect(Config.DB_CONNECTION_STRING,{useNewUrlParser: true});

export {User}