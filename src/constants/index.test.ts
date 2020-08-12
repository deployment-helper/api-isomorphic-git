import { DEFAULT_VERSION_FILE_NAME } from "./index";
describe("Constants Tests", () => {
  test("Database should loaded", () => {
    expect(DEFAULT_VERSION_FILE_NAME).toBeTruthy();
  });
});
