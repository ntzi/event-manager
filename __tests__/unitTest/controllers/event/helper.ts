import { Event } from "../../../../src/api/models/event.js";

const createEvents = async () => {
	const data = [
		{
			name: "A1",
		},
		{
			name: "A2",
		},
		{
			name: "A3",
		},
		{
			name: "A4",
		},
	];

	const events: Event[] = [];
	data.map((event) => {
		const newEvent: Event = new Event();
		newEvent.name = event.name;
		events.push(newEvent);
	});

	try {
		await Event.save(events);
	} catch (err) {
		console.error(err);
	}

	return events;
};

export { createEvents };
