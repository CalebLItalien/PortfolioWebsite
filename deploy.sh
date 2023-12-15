#!/bin/sh
# Creates a Docker image ready for deployment
docker build -t resume-website-generator .
docker run -p 8080:8080 resume-website-generator