import { NextFunction, Request } from 'express';

import { sendBadRequest } from '../responses/badRequest.js';
import { sendCreated } from '../responses/created.js';
import { sendForbidden } from '../responses/forbidden.js';
import { sendNotFound } from '../responses/notFound.js';
import { sendOk } from '../responses/ok.js';
import { sendServerError } from '../responses/serverError.js';
import { sendUnauthorized } from '../responses/unauthorized.js';
import { ResponseI } from '../types/responses/responsesTypes.js';

const responsesLoader = app => {
	app.use((req: Request, res: ResponseI, next: NextFunction) => {
		res.ok = sendOk(req, res);
		res.created = sendCreated(req, res);
		res.badRequest = sendBadRequest(req, res);
		res.forbidden = sendForbidden(req, res);
		res.notFound = sendNotFound(req, res);
		res.serverError = sendServerError(req, res);
		res.unauthorized = sendUnauthorized(req, res);

		next();
	});
};

export { responsesLoader };
