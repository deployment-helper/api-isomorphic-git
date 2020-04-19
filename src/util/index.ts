import { Eval } from "./eval";
import { DefaultRoles } from "../constants";
import { ErrorBadReq } from "../errors";
import { EntityHelper } from "../helpers/entity.helper";

function createPermissionsBYRole(
  role: string,
  entityId: string
): Array<string> {
  const entityHelper = new EntityHelper(entityId);
  switch (role) {
    case DefaultRoles.READER:
      return entityHelper.createReaderPermissions();
    case DefaultRoles.WRITER:
      return entityHelper.createWritePermissions();
    case DefaultRoles.MAINTAINER:
      return entityHelper.createMaintainerPermissions();
    case DefaultRoles.OWNER:
      return entityHelper.createOwnerPermissions();
    default:
      throw new ErrorBadReq("Role does not exist");
  }
}
export { Eval, createPermissionsBYRole };
