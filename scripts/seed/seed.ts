import { postgresClose, postgresLoad } from "../../src/api/loaders/dbLoader.js";
import { EventSeeder } from "./event.js";

const eventSeeder = new EventSeeder();

await postgresLoad();

// Seed all tables
await eventSeeder.seed();

await postgresClose();
