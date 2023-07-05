/*
    201 (Created) Response

    Usage:
    return res.created();
    return res.created(data);
    return res.created(data, message);

*/
import {
	ResponseType,
	SendResponseI,
} from '../types/responses/responsesTypes.js';

const debug = false;

const sendCreated: SendResponseI = (req, res) => (data, message) => {
	const { body, query, params, headers } = req;
	const request = { body, query, params, headers };

	res.status(201);

	const response: ResponseType = {
		status: 'success',
		message: message ? message : 'Created',
		data: data ? data : {},
	};

	if (debug) {
		console.debug(
			`Sending 201 ("Created") response: \n`,
			response,
			`\nfor request: \n`,
			request,
		);
	}

	return res.json(response);
};

export { sendCreated };
