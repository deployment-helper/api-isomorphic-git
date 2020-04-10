import {loginSchema,userSchema} from './index';
describe("Validation Tests",()=>{
    test("LoginSchema should loaded",()=>{
        expect(loginSchema).toBeTruthy();
    });
    test("userSchema should loaded",()=>{
        expect(userSchema).toBeTruthy();
    });
})