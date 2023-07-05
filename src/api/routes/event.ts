import {
	create,
	getAll,
	getOne,
	remove,
	updateOne,
} from "../controllers/event.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { validate } from "../validators/requestValidator.js";
import {
	createSchema,
	getAllSchema,
	getOneSchema,
	updateOneSchema,
	removeSchema,
} from "../validators/schemas/event.js";
import { Router } from "express";

const router = Router();

router.get("/event/:id", validate(getOneSchema), asyncHandler(getOne));

router.get("/event/", validate(getAllSchema), asyncHandler(getAll));

router.post("/event/", validate(createSchema), asyncHandler(create));

router.put("/event/:id", validate(updateOneSchema), asyncHandler(updateOne));

router.delete("/event/:id", validate(removeSchema), asyncHandler(remove));

export default router;
