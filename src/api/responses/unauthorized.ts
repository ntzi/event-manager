/*
    401 (Bad Request) Response

    Usage:
    return res.unauthorized();
    return res.unauthorized(data);
    return res.unauthorized(data, message);

*/
import {
	ResponseType,
	SendResponseI,
} from "../types/responses/responsesTypes.js";

const debug = false;

const sendUnauthorized: SendResponseI = (req, res) => (data, message) => {
	const { body, query, params, headers } = req;
	const request = { body, query, params, headers };

	res.status(401);

	const response: ResponseType = {
		status: "fail",
		message: message ? message : "Not authorized",
		data: data ? data : {},
	};

	if (debug) {
		console.debug(
			`Sending 401 ("Unauthorized") response: \n`,
			response,
			`\nfor request: \n`,
			request
		);
	}

	return res.json(response);
};

export { sendUnauthorized };
