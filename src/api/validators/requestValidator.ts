import { NextFunction, Request, Response } from 'express';

import { RequestSchemaFn } from '../types/validators/validatorTypes';

/*
 	Validate and convert input to expected types. Eg convert string '123' to number 123
*/
const validate =
	(schema: RequestSchemaFn) =>
	(req: Request, res: Response, next: NextFunction) => {
		const { body, query, params } = req;
		const request = { body, query, params };
		const options = { convert: true };
		const { error, value } = schema().validate(request, options);

		req.query = value?.query || {};
		req.body = value?.body;
		req.params = value?.params || {};

		if (error) {
			return res.status(400).json(error.details);
		}

		return next();
	};

export { validate };
