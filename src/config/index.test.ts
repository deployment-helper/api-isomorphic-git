import { Config } from "./index";
describe("Config Tests", () => {
  it("Mdule should loaded", () => {
    expect(Config).toBeTruthy();
  });
  it("Should have JWT_SECRET", () => {
    expect(Config.JWT_SECRET).toBeTruthy();
  });
  it("Should have JWT_EXPIRE_TIME", () => {
    expect(Config.JWT_EXPIRE_TIME).toBeTruthy();
  });
});
