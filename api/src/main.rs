use actix_web::{
    web,
    App,
    HttpServer,
    Responder,
};
use actix_cors::Cors;

#[derive(Deserialize)]
struct EmailForm {
    user_email: String,
    user_name: String,
    user_message: String,
}

async fn send_contact_email(form: web::Json<EmailForm>) -> impl Responder {
    match send_email::send_email(&form.user_email, &form.user_name, &form.user_message) {
        Ok(_) => HttpResponse::Ok().body("Email sent successfully"),
        Err(_) => HttpResponse::InternalServerError().body("Error sending email"),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .allowed_header(http:header::CONTENT_TYPE)
            .max_age(3600);
        App::new()
            .wrap(cors)
            .route("/send-email", web::get().to(send_contact_email))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
