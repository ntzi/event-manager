import { Event } from "../models/event.js";
import {
	CreateHandler,
	CreateReq,
	CreateResData,
	GetAllHandler,
	GetAllReq,
	GetAllResData,
	GetOneHandler,
	GetOneReq,
	GetOneResData,
	RemoveHandler,
	RemoveReq,
	RemoveResData,
	UpdateOneHandler,
	UpdateOneReq,
	UpdateOneResData,
} from "../types/controller/eventTypes.js";
import { ResponseI } from "../types/responses/responsesTypes.js";
import { validateResData } from "../validators/responseDataValidator.js";
import {
	createResData,
	getAllResData,
	getOneResData,
	removeResData,
	updateOneResData,
} from "../validators/schemas/response/event.js";

const getOne: GetOneHandler = async (req: GetOneReq, res: ResponseI) => {
	const { id } = req.params;
	const event = await Event.findOne({
		where: { id },
	});
	const resData = validateResData<GetOneResData>(event, getOneResData);
	return res.ok(resData);
};

const getAll: GetAllHandler = async (_req: GetAllReq, res: ResponseI) => {
	const events = await Event.find();
	const resData = validateResData<GetAllResData>(events, getAllResData);
	return res.ok(resData);
};

const create: CreateHandler = async (req: CreateReq, res: ResponseI) => {
	const { name, date } = req.body;
	const exists = await Event.findOne({
		where: { name: name },
	});

	if (exists) {
		return res.badRequest(exists, "Event already exists");
	}
	const newEvent = new Event();
	newEvent.name = name;
	newEvent.date = date;

	const event = await Event.save(newEvent);
	const resData = validateResData<CreateResData>(event, createResData);
	return res.created(resData);
};

const updateOne: UpdateOneHandler = async (
	req: UpdateOneReq,
	res: ResponseI
) => {
	const {
		params: { id },
		body,
	} = req;

	const result = await Event.update(id, body);
	if (result.affected === 0) {
		return res.badRequest(`Record with id: ${id} does not exist.`);
	}

	const resData = validateResData<UpdateOneResData>(result, updateOneResData);
	return res.created(resData, "Updated");
};

const remove: RemoveHandler = async (req: RemoveReq, res: ResponseI) => {
	const { id } = req.params;
	const events = await Event.delete(id);

	const resData = validateResData<RemoveResData>(events, removeResData);
	return res.ok(resData);
};

export { getOne, getAll, create, updateOne, remove };
