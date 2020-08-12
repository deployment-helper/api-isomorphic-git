import { getVersionSchema, crateVersionSchema } from "./index";
describe("Validation Tests", () => {
  test("regLoginSchema should loaded", () => {
    expect(getVersionSchema).toBeTruthy();
  });
  test("reqAddUserSchema should loaded", () => {
    expect(crateVersionSchema).toBeTruthy();
  });
});
