/*
    This works as a wrapper for the controllers, so we don't have to write try/catch blocks
*/
export const asyncHandler = fn => {
	return async (req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (err) {
			next(err);
		}
	};
};
