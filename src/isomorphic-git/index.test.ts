import { Github, Git } from ".";
describe("Isomorphic Git", () => {
  it("Github module should load", () => {
    expect(Github).toBeTruthy();
  });
  it("Git module should load", () => {
    expect(Git).toBeTruthy();
  });
});
