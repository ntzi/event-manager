import { Response, Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export type CustomParams<T> = T & ParamsDictionary;

interface ResponseJsonI {
	(data?: unknown, message?: string): object;
}
interface SendResponseI {
	(req: Request, res: Response): ResponseJsonI;
}

interface ResponseI extends Response {
	ok: ResponseJsonI;
	created: ResponseJsonI;
	badRequest: ResponseJsonI;
	forbidden: ResponseJsonI;
	notFound: ResponseJsonI;
	serverError: ResponseJsonI;
	unauthorized: ResponseJsonI;
}
interface ResponseType {
	status: string;
	message: string;
	data: unknown;
}

export { ResponseJsonI, SendResponseI, ResponseI, Request, ResponseType };
