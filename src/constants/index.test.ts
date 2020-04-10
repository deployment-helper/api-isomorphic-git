import {Database} from './index';
describe("Constants Tests",()=>{
    test("Database should loaded",()=>{
        expect(Database).toBeTruthy();
    });
    test("COLLECTION_NAME should defined",()=>{
        expect(Database.COLLECTION_NAME).toBeTruthy();
    });
});