/*
    200 (Ok) Response

    Usage:
    return res.ok();
    return res.ok(data);
    return res.ok(data, message);

*/
import { SendResponseI } from '../types/responses/responsesTypes';

const sendOk: SendResponseI = (_req, res) => (data, message) => {
	res.status(200);

	const response = {
		status: 'success',
		message: message ? message : 'Ok',
		data: data ? data : {},
	};
	return res.json(response);
};

export { sendOk };
