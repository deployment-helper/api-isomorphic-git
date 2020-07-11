import helpers, { JwtHelper } from "./index";
describe("Helper Tests", () => {
  it("Module should loaded", () => {
    expect(helpers).toBeTruthy();
  });
  test("JWT helper should loaded", () => {
    expect(JwtHelper).toBeTruthy();
  });
});
