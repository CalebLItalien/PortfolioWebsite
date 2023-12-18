use actix_web::{
    web,
    App,
    HttpServer,
    Responder,
    HttpResponse,
    http::header,
};
use actix_cors::Cors;
use serde::Deserialize;

mod send_mail;
mod send_resume;

#[derive(Deserialize)]
struct ContactForm {
    user_email: String,
    user_name: String,
    user_message: String,
}

#[derive(Deserialize)]
struct ResumeRequest {
    email: String
}

async fn send_contact_email(form: web::Json<ContactForm>) -> impl Responder {
    match send_mail::send_email(&form.user_email, &form.user_name, &form.user_message).await {
        Ok(_) => HttpResponse::Ok().body("Email sent successfully"),
        Err(e) => {
            eprintln!("Failed to send email: {:?}", e);
            HttpResponse::InternalServerError().body("Error sending email")
        }
    }
}

async fn send_resume(req: web::Json<ResumeRequest>) -> impl Responder {
    match send_resume::send_email_with_resume(&req.email).await {
        Ok(_) => HttpResponse::Ok().body("Resume sent successfully"),
        Err(_) => HttpResponse::InternalServerError().body("Error sending resume"),
    }
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:8080")
            .allowed_methods(vec!["POST"])
            .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
            .allowed_header(header::CONTENT_TYPE)
            .max_age(3600);
        App::new()
            .wrap(cors)
            .route("/send-email", web::post().to(send_contact_email))
            .route("/send-resume", web::post().to(send_resume))
    })
    .bind("0.0.0.0:8081")?
    .run()
    .await
}
