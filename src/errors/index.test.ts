import { ErrorBadReq } from "./index";
describe("Error Tests", () => {
  test("ErrorBadReq should loaded", () => {
    expect(ErrorBadReq).toBeTruthy();
  });
  test("ErrorBadReq should be initailized", () => {
    const error = new ErrorBadReq("Invalid reqeust");
    expect(error).toBeTruthy();
  });
});
