import app from "../../../../src/api/loaders/appLoader.js";
import {
	AppDataSource,
	postgresClose,
	postgresLoad,
} from "../../../../src/api/loaders/dbLoader.js";
import { Event } from "../../../../src/api/models/event.js";
import { deleteAllRecords } from "../helper.js";
import test from "ava";
import supertest from "supertest";

let apiRequest;

test.before(async () => {
	await postgresLoad();
	apiRequest = supertest(app);
});

test.after(async () => {
	await deleteAllRecords();
	await postgresClose();
});

test.afterEach(async () => {
	await AppDataSource.getRepository(Event).delete({});
});

test("create: success", async (t) => {
	const endpoint = `/api/event`;
	const body = {
		name: "Tomorrowland",
		date: new Date("2021-07-16 09:00"),
	};

	const response = await apiRequest.post(endpoint).send(body);

	t.is(response.status, 201);

	const event = await Event.findOne({
		where: { id: response.body.data.id },
	});

	t.is(event?.id, response.body.data.id);
});

test("create: prevent duplicates", async (t) => {
	const endpoint = `/api/event`;
	const body = {
		name: "Tomorrowland",
		date: new Date("2021-07-16 09:00"),
	};

	const newEvent = new Event();
	newEvent.name = body.name;
	newEvent.date = body.date;
	await Event.save(newEvent);

	const response = await apiRequest.post(endpoint).send(body);

	t.is(response.status, 400);

	const event = await Event.findOne({
		where: { id: response.body.data.id },
	});

	t.is(event?.id, response.body.data.id);
	t.is(response.body.message, "Event already exists");
});

test("update: success", async (t) => {
	// Create an event
	const newEvent = new Event();
	newEvent.name = "Tomorrowland";
	newEvent.date = new Date("2021-07-16 09:00");
	const event = await Event.save(newEvent);

	const endpoint = `/api/event/${event.id}`;

	const newName = "Tomorrowland 2023";

	// update the event
	const body = {
		name: newName,
	};

	const response = await apiRequest.put(endpoint).send(body);

	t.is(response.status, 201);

	// Get the updated event
	const updatedEvent = await Event.findOne({
		where: { id: response.body.data.id },
	});

	t.is(updatedEvent?.name, newName);
});

test("getOne: success", async (t) => {
	// Create an event
	const newEvent = new Event();
	newEvent.name = "Tomorrowland";
	newEvent.date = new Date("2021-07-16 09:00");
	const event = await Event.save(newEvent);

	const endpoint = `/api/event/${event.id}`;

	const response = await apiRequest.get(endpoint);

	t.is(response.status, 200);

	t.is(newEvent?.name, response.body.data.name);
});

test("getAll: success", async (t) => {
	// Create an event
	const newEvent = new Event();
	newEvent.name = "Tomorrowland";
	newEvent.date = new Date("2021-07-16 09:00");
	await Event.save(newEvent);

	// Create a second event
	const newEvent2 = new Event();
	newEvent2.name = "Tomorrowland 2023";
	newEvent2.date = new Date("2021-07-16 09:00");
	await Event.save(newEvent2);

	const endpoint = "/api/event";

	const response = await apiRequest.get(endpoint);

	t.is(response.status, 200);

	t.is(response.body.data.length, 2);
});

test("delete: success", async (t) => {
	// Create an event
	const newEvent = new Event();
	newEvent.name = "Tomorrowland";
	newEvent.date = new Date("2021-07-16 09:00");
	const event = await Event.save(newEvent);

	const endpoint = `/api/event/${event.id}`;

	const response = await apiRequest.delete(endpoint);
	t.is(response.status, 200);

	const deletedEvent = await Event.findOne({ where: { id: event.id } });

	t.is(deletedEvent, null);
});
