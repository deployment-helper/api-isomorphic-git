import { ContentVersionController } from ".";
import httpMocks from "node-mocks-http";
describe("Content Version Module", () => {
  const ctrl = new ContentVersionController();
  it("Module should load", () => {
    expect(ContentVersionController).toBeTruthy();
  });
  it("Should create a version 200", async () => {
    const req = httpMocks.createRequest({
      body: {
        username: "vinaymavi",
        accesstoken: "fsdjkldjlkfjdlfjd",
        repourl: "https://github.com/myjunior/setpfunctions.git",
        version: "4",
        content: "jfdslfjdlkjfdlkjfkld",
      },
      params: {
        projectId: "12345",
      },
      user: {
        permissions: ["entity.12345.read", "entity.12345.write"],
      },
    });
    const resp = httpMocks.createResponse();
    await ctrl.createVersion(req, resp, () => {});
    expect(resp._getStatusCode()).toBe(200);
  });
  it("Should get a version 401", async () => {
    const req = httpMocks.createRequest({
      query: {
        username: "vinaymavi",
        accesstoken: "fsdjkldjlkfjdlfjd",
        repourl: "https://github.com/myjunior/setpfunctions.git",
      },
      params: {
        projectId: "12345",
        version: 1,
      },
      user: {
        permissions: [],
      },
    });
    const resp = httpMocks.createResponse();
    await ctrl.getVersion(req, resp, () => {});
    console.log(resp._getStatusCode());
    expect(resp._getStatusCode()).toBe(401);
  });
  it("Should get a version 400", async () => {
    const req = httpMocks.createRequest({
      query: {
        username: "vinaymavi",
        accesstoken: "fsdjkldjlkfjdlfjd",
        repourl: "https://github.com/myjunior/setpfunctions.git",
        fjsdlkfjdkl: "jlfjsdlkjfklds",
      },
      params: {
        projectId: "12345",
        version: 1,
      },
      user: {
        permissions: ["entity.12345.read", "entity.12345.write"],
      },
    });
    const resp = httpMocks.createResponse();
    await ctrl.getVersion(req, resp, () => {});
    console.log(resp._getStatusCode());
    expect(resp._getStatusCode()).toBe(400);
  });
  it("Should get a version 200", async () => {
    const req = httpMocks.createRequest({
      query: {
        username: "vinaymavi",
        accesstoken: "fsdjkldjlkfjdlfjd",
        repourl: "https://github.com/myjunior/setpfunctions.git",
      },
      params: {
        projectId: "12345",
        version: "1",
      },
      user: {
        permissions: ["entity.12345.read", "entity.12345.write"],
      },
    });
    const resp = httpMocks.createResponse();
    await ctrl.getVersion(req, resp, () => {});
    console.log(resp._getStatusCode());
    expect(resp._getStatusCode()).toBe(200);
  });
});
