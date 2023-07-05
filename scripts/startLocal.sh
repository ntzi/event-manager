#!/bin/bash

if [ "${NODE_ENV}" != 'production' ]; then 
    echo 'Dropping Database...'
    npm run typeorm -- schema:drop
    echo 'Seeding Database...'
    ts-node-esm ./scripts/seed/seed.ts
fi

nodemon