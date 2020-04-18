import { User } from "../constants";
import { Eval } from "./eval";
export class Project {
  private prjectId: string;
  constructor(projectId: string) {
    this.prjectId = projectId;
  }
  createReaderPermissions(): Array<string> {
    const permissons: Array<string> = [];
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_READ_PERMISSION_TEMPLATE
      )
    );
    return permissons;
  }
  createWritePermissions(): Array<string> {
    const permissons: Array<string> = [];
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_READ_PERMISSION_TEMPLATE
      )
    );
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_WRITE_PERMISSION_TEMPLATE
      )
    );
    return permissons;
  }

  createMaintainerPermissions(): Array<string> {
    const permissons: Array<string> = [];
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_READ_PERMISSION_TEMPLATE
      )
    );
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_WRITE_PERMISSION_TEMPLATE
      )
    );
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_DELETE_PERMISSION_TEMPLATE
      )
    );
    return permissons;
  }
  createOwnerPermissions(): Array<string> {
    const permissons: Array<string> = [];
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_READ_PERMISSION_TEMPLATE
      )
    );
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_WRITE_PERMISSION_TEMPLATE
      )
    );
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_DELETE_PERMISSION_TEMPLATE
      )
    );
    permissons.push(
      Eval.templateToString(
        { projectId: this.prjectId },
        User.PROJECT_MANAGE_USER_PERMISSION_TEMPLATE
      )
    );
    return permissons;
  }
}
