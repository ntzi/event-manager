/*
    403 (Forbidden) Response

    Usage:
    return res.forbidden();
    return res.forbidden(data);
    return res.forbidden(data, message);

*/
import {
	ResponseType,
	SendResponseI,
} from '../types/responses/responsesTypes.js';

const debug = false;

const sendForbidden: SendResponseI = (req, res) => (data, message) => {
	const { body, query, params, headers } = req;
	const request = { body, query, params, headers};

	res.status(403);

	const response: ResponseType = {
		status: 'fail',
		message: message ? message : 'The action is not allowed',
		data: data ? data : {},
	};

	if (debug) {
		console.debug(
			`Sending 403 ("Forbidden") response: \n`,
			response,
			`\nfor request: \n`,
			request,
		);
	}
	return res.json(response);
};

export { sendForbidden };
