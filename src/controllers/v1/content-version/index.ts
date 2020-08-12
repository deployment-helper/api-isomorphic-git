import { BaseController } from "../../base.controller";
import { JwtRequest, ErrorBadReq } from "@myjunior/commons";
import { Response, NextFunction } from "express";
import {
  hasPermission,
  PermissionTemplates,
  Permissions,
} from "@myjunior/commons";
import { crateVersionSchema, getVersionSchema } from "../../../req-schemas";
import { v4 as uuidv4 } from "uuid";
import { Github } from "../../../isomorphic-git";
import { DEFAULT_VERSION_FILE_NAME } from "../../../constants";
export class ContentVersionController extends BaseController {
  async getVersion(req: JwtRequest, resp: Response, next: NextFunction) {
    this.logger.info("Http Request start getVersion");
    // TODO: schema validation
    const requiredPermission = Permissions.customPermisson(
      PermissionTemplates.ENTITY_READ_PERMISSION_TEMPLATE,
      { entityId: req.params.projectId }
    );
    this.logger.info("Checking permissions");
    if (hasPermission(req?.user?.permissions, requiredPermission)) {
      let ismGit;
      try {
        const reqData = Object.assign({}, req.params, req.query, req.body);
        this.validateReqSchema(getVersionSchema, reqData);
        this.logger.info("Permission check passed");
        const dir = `${req.params.projectId}_${uuidv4()}`;
        const username: string = req.query.username?.toString() || "";
        const accesstoken: string = req.query.accesstoken?.toString() || "";
        const repoUrl: string = req.query.repourl?.toString() || "";
        ismGit = new Github(username, accesstoken, dir);

        await ismGit.clone(repoUrl);
        const content = await ismGit.readFile(
          `${req.params.projectId}/${req.params.version}/${DEFAULT_VERSION_FILE_NAME}`
        );
        this.logger.info("Cleaning....");
        await ismGit.removeFolder();
        if (content) {
          resp.status(200).send(content);
        } else {
          resp.status(404).send("File does not exist");
        }
      } catch (error) {
        this.logger.info("Cleaning....");
        ismGit ? await ismGit.removeFolder() : "";
        // TODO: use global error handling.
        if (error.name === "BadRequest") {
          resp.status(400).send(error);
        } else {
          resp.status(500).send(error);
        }
      }
    } else {
      resp.status(401).send("User not authorized");
    }
  }

  async createVersion(req: JwtRequest, resp: Response, next: NextFunction) {
    // TODO: schema validation
    this.logger.info("Http Request start for createVersion");
    const requiredPermission = Permissions.customPermisson(
      PermissionTemplates.ENTITY_WRITE_PERMISSION_TEMPLATE,
      { entityId: req.params.projectId }
    );
    this.logger.info("Checking permissions");
    if (hasPermission(req?.user?.permissions, requiredPermission)) {
      let ismGit;
      try {
        const reqData = Object.assign({}, req.params, req.query, req.body);
        this.validateReqSchema(crateVersionSchema, reqData);
        this.logger.info("Permission check passed");
        const dir = `${req.params.projectId}_${uuidv4()}`;
        const username: string = req.body.username?.toString() || "";
        const accesstoken: string = req.body.accesstoken?.toString() || "";
        const repoUrl: string = req.body.repourl?.toString() || "";
        const version: number = req.body.version || 1;
        const content: string = req.body.content || "";
        ismGit = new Github(username, accesstoken, dir);
        await ismGit.clone(repoUrl);
        await ismGit.addFile(
          `${req.params.projectId}/${version}/${DEFAULT_VERSION_FILE_NAME}`,
          content
        );
        await ismGit.commit(
          `${req.params.projectId} version ${version} created.`
        );
        await ismGit.push();
        this.logger.info("Cleaning....");
        await ismGit.removeFolder();
        resp.status(200).send({
          status: "OK",
          message: "New version created successfully.",
          version,
          versionPath: `${req.params.projectId}/${version}/${DEFAULT_VERSION_FILE_NAME}`,
        });
      } catch (error) {
        this.logger.info("Something is wrong");
        this.logger.error(error);
        this.logger.info("Cleaning....");
        ismGit ? await ismGit.removeFolder() : "";
        // TODO: use global error handling.
        if (error.name === "BadRequest") {
          resp.status(400).send(error);
        } else {
          resp.status(500).send(error);
        }
      }
    } else {
      this.logger.warn("Permission check fails. Permission required.");
      resp.status(401).send("User not authorized");
    }
  }
}
