#!/bin/bash
# Restarts the development environment

docker-compose down
rm -rf ./frontend/node_modules
rm -rf ./api/target
docker-compose build --no-cache
docker-compose up -d