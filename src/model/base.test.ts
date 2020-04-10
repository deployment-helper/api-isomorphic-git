import {BaseModel} from './Base';
describe("BaseModel Tests",()=>{
    test("BaseModel should loaded",()=>{
        expect(BaseModel).toBeTruthy();
    });
    test("BaseModel should be initialized",()=>{
        const baseModel = new BaseModel('temp_collection');
        expect(baseModel).toBeTruthy();
    })
})