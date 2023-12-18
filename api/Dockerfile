FROM rust:1.73.0 as backend-build
WORKDIR /usr/src/myapp
COPY ./Cargo.toml ./Cargo.lock ./
COPY ./src ./src
RUN cargo build --release 

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y openssl libssl-dev
COPY --from=backend-build /usr/src/myapp/target/release/resume-website-generator /usr/local/bin/
EXPOSE 8081
CMD ["resume-website-generator"]
