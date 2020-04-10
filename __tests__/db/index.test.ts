import * as firestore from '../../src/db';
describe("Database Tests",()=>{
    test("Firestore should loaded",()=>{
        expect(firestore).toBeTruthy();
    });
});