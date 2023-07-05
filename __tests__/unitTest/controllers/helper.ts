import { AppDataSource } from "../../../src/api/loaders/dbLoader.js";
import { Event } from "../../../src/api/models/event.js";

const deleteAllRecords = async () => {
	await AppDataSource.getRepository(Event).delete({});
};

export { deleteAllRecords };
