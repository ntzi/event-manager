/*
    404 (Not Found) Response

    Usage:
    return res.notFound();
    return res.notFound(data);
    return res.notFound(data, message);

*/
import {
	ResponseType,
	SendResponseI,
} from "../types/responses/responsesTypes.js";

const debug = false;

const sendNotFound: SendResponseI = (req, res) => (data, message) => {
	const { body, query, params, headers } = req;
	const request = { body, query, params, headers };

	res.status(404);

	const response: ResponseType = {
		status: "fail",
		message: message ? message : "Not found",
		data: data ? data : {},
	};

	if (debug) {
		console.debug(
			`Sending 404 ("Not Found") response: \n`,
			response,
			`\nfor request: \n`,
			request
		);
	}

	return res.json(response);
};

export { sendNotFound };
