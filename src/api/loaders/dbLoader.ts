import config from "../../config/config.js";
import "reflect-metadata";
import { DataSource } from "typeorm";

const {
	databases: {
		postgres: {
			host,
			port,
			username,
			password,
			database,
			synchronize,
			logging,
			migrations,
			entities,
		},
	},
} = config;

const AppDataSource = new DataSource({
	type: "postgres",
	host,
	port,
	username,
	password,
	database,
	synchronize,
	logging,
	migrations,
	entities,
});

const postgresLoad = async () => {
	try {
		await AppDataSource.initialize();
		console.info(`Postgres schema has been initialized!`);
	} catch (err) {
		console.error("Error during Postgres initialization\n", err);
	}
};

const postgresClose = async () => {
	await AppDataSource.destroy();
	console.info("Postgres connection has been closed");
};

export { AppDataSource, postgresLoad, postgresClose };
