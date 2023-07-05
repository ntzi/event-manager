/*
    400 (Bad Request) Response

    Usage:
    return res.badRequest();
    return res.badRequest(data);
    return res.badRequest(data, message);

*/
import {
	ResponseType,
	SendResponseI,
} from "../types/responses/responsesTypes.js";

const debug = false;

const sendBadRequest: SendResponseI = (req, res) => (data, message) => {
	const { body, query, params, headers } = req;
	const request = { body, query, params, headers };

	res.status(400);

	const response: ResponseType = {
		status: "fail",
		message: message ? message : "Something went wrong",
		data: data ? data : {},
	};

	if (debug) {
		console.debug(
			`Sending 400 ("Bad Request") response: \n`,
			response,
			`\nfor request: \n`,
			request
		);
	}

	return res.json(response);
};

export { sendBadRequest };
