import { Git } from ".";
describe("Isomorphic Git Module", () => {
  const git = new Git("temp", "temp_token", "fjsdlkjdl");
  it("Module should load", () => {
    expect(Git).toBeTruthy();
  });
  it("Should clone", async () => {
    return git.clone("");
  });
  it("Should addFile", async () => {
    return git.addFile("fjdskfjkdl", "jfsdklfjkldfjkld");
  });

  it("Should commit", async () => {
    return git.commit("fjdskfjkdl");
  });
  it("Should push", async () => {
    return git.push();
  });
  it("Should readFile", async () => {
    return git.readFile("fjdskfjkdl");
  });
  it("Should removeFolder", async () => {
    return git.removeFolder();
  });
});
