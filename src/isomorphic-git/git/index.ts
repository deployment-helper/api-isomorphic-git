import IsmGit from "isomorphic-git";
import http from "isomorphic-git/http/node";
import path from "path";
import fs from "fs-extra";
import rimraf from "rimraf";
import { logger } from "@myjunior/commons";
import { Config } from "../../config";
export class Git {
  constructor(
    protected userName: string,
    protected accessToken: string,
    protected dir: string,
    protected singleBranch: boolean = true,
    protected depth: number = 1,
    protected noTags: boolean = true,
    protected rootDir: string = "/tmp"
  ) {}
  protected onAuth = () => {
    return {
      username: this.userName,
      password: this.accessToken,
    };
  };

  async clone(repoURL: string): Promise<any> {
    logger.info("Cloning is in-progress");
    return IsmGit.clone({
      url: repoURL,
      fs: fs,
      http: http,
      onAuth: this.onAuth,
      dir: path.join(this.rootDir, this.dir),
      singleBranch: this.singleBranch,
      noTags: this.noTags,
    });
  }
  async addFile(filePath: string, content: string) {
    logger.info(`Writing ${filePath} file `);
    fs.ensureFileSync(path.join(this.rootDir, this.dir, filePath));
    fs.writeFileSync(path.join(this.rootDir, this.dir, filePath), content);
    logger.info(`File ${filePath} is done`);
    logger.info(`Adding ${filePath} file`);
    return IsmGit.add({
      fs: fs,
      dir: path.join(this.rootDir, this.dir),
      filepath: filePath,
    });
  }
  async commit(commitMsg: string) {
    return IsmGit.commit({
      fs,
      dir: path.join(this.rootDir, this.dir),
      message: commitMsg,
      author: {
        name: Config.GIT_AUTHOR_NAME,
        email: Config.GIT_AUTHOR_EMAIL,
      },
    });
  }
  async push() {
    logger.info("Pushing commit....");
    return IsmGit.push({
      fs,
      http,
      onAuth: this.onAuth,
      dir: path.join(this.rootDir, this.dir),
    });
  }
  /**
   * Read file from filesystem and returns file content. returns undefined when file does not exist.
   * @param filePath
   */
  async readFile(filePath: string): Promise<string | undefined> {
    logger.info(`Checking for file ${filePath}...`);
    if (fs.existsSync(path.join(this.rootDir, this.dir, filePath))) {
      logger.info(`Reading file ${filePath}...`);
      const content = fs.readFileSync(
        path.join(this.rootDir, this.dir, filePath)
      );
      logger.info(`File ${filePath} reading done`);
      return content.toString();
    } else {
      logger.warn(`File ${filePath} does not exist.`);
      return undefined;
    }
  }

  async removeFolder() {
    rimraf.sync(path.join(this.rootDir, this.dir));
  }
}
