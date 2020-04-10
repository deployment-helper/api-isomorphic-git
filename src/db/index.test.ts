import * as firestore from './index';
describe("Database Tests",()=>{
    test("Firestore should loaded",()=>{
        expect(firestore).toBeTruthy();
    });
});