import { Router } from "express";
import { ContentVersionController } from "../../../controllers/v1/content-version";
const router = Router();
const ctrl = new ContentVersionController();
router.post("/:projectId/versions", ctrl.createVersion.bind(ctrl));
router.get("/:projectId/versions/:version", ctrl.getVersion.bind(ctrl));

export { router as contentVersionRouter };
