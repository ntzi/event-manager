/*
    500 (Server Error) Response

    Usage:
    return res.serverError();
    return res.serverError(data);
    return res.serverError(data, message);

*/
import {
	ResponseType,
	SendResponseI,
} from "../types/responses/responsesTypes.js";

const debug = true;

const sendServerError: SendResponseI = (_req, res) => (data, message) => {
	// const { body, query, params, headers } = req;
	// const request = { body, query, params, headers};

	res.status(500);

	const response: ResponseType = {
		status: "error",
		message: message ? message : "Something went wrong",
		data: data ? data : {},
	};

	if (debug) {
		console.debug(
			`Sending 500 ("Server Error") response: \n`,
			response
			// `\nfor request: \n`,
			// request,
		);
	}

	return res.json(response);
};

export { sendServerError };
