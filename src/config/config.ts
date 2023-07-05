import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const env = process.env.NODE_ENV || "local";

const config = () => {
	return {
		local: {
			nodeEnv: "local",
			api: {
				port: 4000,
			},
			logs: {
				level: "info",
			},
			databases: {
				postgres: {
					host: "postgres",
					port: "5432",
					username: "admin",
					password: "password",
					database: "event-manager",
					migrations: ["src/api/migrations/**/*.{ts,js}"],
					entities: ["src/api/models/**/*.{ts,js}"],
					synchronize: true,
					logging: false,
				},
			},
		},

		test: {
			nodeEnv: "test",
			api: {
				port: 4000,
			},
			databases: {
				postgres: {
					host: "postgres-test",
					port: "5432",
					username: "admin",
					password: "password",
					database: "event-manager",
					migrations: ["src/api/migrations/**/*.{ts,js}"],
					entities: ["src/api/models/**/*.{ts,js}"],
					synchronize: true,
					logging: false,
				},
			},
		},

		testLocal: {
			nodeEnv: "testLocal",
			api: {
				port: 4000,
			},
			databases: {
				postgres: {
					host: "localhost",
					port: "5779",
					username: "admin",
					password: "password",
					database: "event-manager",
					migrations: ["src/api/migrations/**/*.{ts,js}"],
					entities: ["src/api/models/**/*.{ts,js}"],
					synchronize: true,
					logging: false,
				},
			},
		},

		development: {
			nodeEnv: "development",
			api: {
				port: 3000,
			},
			logs: {
				level: "info",
			},
			databases: {
				postgres: {
					host: "/cloudsql/event-manager-development:europe-west1:event-manager-development",
					port: "5432",
					username: "admin",
					password: process.env.POSTGRES_PASSWORD,
					database: "event-manager",
					migrations: ["build/src/api/migrations/**/*.{ts,js}"],
					entities: ["build/src/api/models/**/*.{ts,js}"],
					synchronize: true,
					logging: false,
				},
			},
		},

		staging: {
			nodeEnv: "staging",
			api: {
				port: 3000,
			},
			logs: {
				level: "info",
			},
			databases: {
				postgres: {
					host: "/cloudsql/event-manager-staging:europe-west1:event-manager-staging",
					port: "5432",
					username: "admin",
					password: process.env.POSTGRES_PASSWORD,
					database: "event-manager",
					migrations: ["build/src/api/migrations/**/*.{ts,js}"],
					entities: ["build/src/api/models/**/*.{ts,js}"],
					synchronize: true,
					logging: false,
				},
			},
		},

		production: {
			nodeEnv: "production",
			api: {
				port: process.env.PORT,
			},
			databases: {
				postgres: {
					host: "/cloudsql/event-manager-production:europe-west1:event-manager-production",
					port: "5432",
					username: "admin",
					password: process.env.POSTGRES_PASSWORD,
					database: "event-manager",
					migrations: ["build/src/api/migrations/**/*.{ts,js}"],
					entities: ["build/src/api/models/**/*.{ts,js}"],
					synchronize: false,
					logging: false,
				},
			},
		},
	};
};

export default config()[env];
