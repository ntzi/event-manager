# Live Event Manager System

## Env variables
### Set up
Follow the `.env.example` file

Add more `.env.*` files for each of your environments (eg: `.env.test`, `.env.staging`, `.env.prod`, etc)


### Adding new evn variable

- Secrets
    - Update [config.ts](src/config/config.ts)
    - Update `.env.*` files (all environments)

- Non Secrets
    - Update [config.ts](src/config/config.ts)


## Run with Docker

- add `.env.local` file
- 
    ```
    docker compose up
    ```



## Run without Docker

- add `.env.local` file
-   ```
    npm install
    ```
-   ```
    npm run dev
    ```

## Use

Make a `GET` request to `http://localhost:4000/api/`

or 

[Use the Postman Collection](postman/README.md)

## Test

- Start test containers

    ```
    docker compose -f docker-compose.test.yml up -d
    ```

- Watch test changes
    ```
    docker logs event-manager-api-test -f
    ```
    For interactive test-watch use 
    ```
    npm run test-local:watch
    ```
    after creating a `.env.testLocal` file

- Or get test coverage
    ```
    npm run test
    ```

## Connect to local db
```
host: localhost (0.0.0.0)
port: 5778
user: admin
password: password
database: event-manager
```

## Db Migrations

```
npm run migrations-docker -- migrationName
```
use the default migration name _latest_ by skipping parameter `-- migrationName`


