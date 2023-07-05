import { ResponseI } from "../types/responses/responsesTypes.js";
import { NextFunction, Request } from "express";

const errorHandler = (app) => {
	app.use((err, _req: Request, res: ResponseI, next: NextFunction) => {
		if (err.name === "UnauthorizedError") {
			res.unauthorized();
			console.error(err);
		} else if (err.name === "InvalidTokenError") {
			res.forbidden();
			console.error(err);
		} else {
			next(err);
		}
	});
};

export default errorHandler;
