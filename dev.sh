#!/bin/sh
# Used for development of the project and live updates

docker-compose up &

sleep 5

case "$(uname)" in
    "Linux") xdg-open http://localhost:8080 ;;
    "Darwin") open http://localhost:8080 ;;
    CYGWIN*|MINGW32*|MSYS*|MINGW*) start http://localhost:8080 ;;
esac