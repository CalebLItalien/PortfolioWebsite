FROM rust:1.73.0 as backend-build
WORKDIR /usr/src/myapp
COPY ./Cargo.toml ./Cargo.lock ./
COPY ./src ./src
RUN cargo build --release 

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y openssl libssl-dev ca-certificates && update-ca-certificates
COPY --from=backend-build /usr/src/myapp/target/release/resume-website-generator /usr/local/bin/
# COPY ../frontend/public/resume.pdf /usr/src/myapp/resume.pdf
EXPOSE 8081
CMD ["resume-website-generator"]
