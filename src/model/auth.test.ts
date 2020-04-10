import {Auth} from './Auth';
describe("Auth Tests",()=>{
    test("Auth should loaded",()=>{
        expect(Auth).toBeTruthy();
    });
    test("Auth should be initialized",()=>{
        const auth = new Auth();
        expect(auth).toBeTruthy();
    })
})