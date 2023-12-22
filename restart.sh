#!/bin/bash
# Restarts the development environment

docker-compose down
rm -rf ./frontend/node_modules
rm ./frontend/package-lock.json
rm -rf ./api/target
cd ./frontend
npm install
cd ..
docker system prune -f
docker-compose build --no-cache
docker-compose up -d