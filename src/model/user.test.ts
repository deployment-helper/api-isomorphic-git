import {User} from './User';
describe("User Tests",()=>{
    test("User should loaded",()=>{
        expect(User).toBeTruthy();
    });
    test("User should be initialized",()=>{
        const user = new User("vinay","mavi","vinaymavi@gmail.com","password");
        expect(user).toBeTruthy();
    })
})