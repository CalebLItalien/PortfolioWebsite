#!/bin/sh
# Creates a Docker image ready for deployment

docker-compose -f docker-compose.yml up --build