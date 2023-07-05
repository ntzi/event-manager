import { Event } from "../../src/api/models/event.js";

export class EventSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				name: "Tomorrowland 2021",
				date: new Date("2021-07-16 09:00"),
			},
			{
				name: "Tomorrowland 2022",
				date: new Date("2022-07-15 09:00"),
			},
			{
				name: "Tomorrowland 2023",
				date: new Date("2023-07-14 09:00"),
			},
			{
				name: "Tomorrowland 2024",
				date: new Date("2024-07-19 09:00"),
			},
		];
	};

	private records = () => {
		const events: Event[] = [];

		this.data().map((event) => {
			const newEvent: Event = new Event();
			newEvent.name = event.name;
			newEvent.date = event.date;
			events.push(newEvent);
		});

		return events;
	};

	public seed = async () => {
		try {
			await Event.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
