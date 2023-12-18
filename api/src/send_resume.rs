use lettre::{
    Message, 
    SmtpTransport, 
    Transport, 
    transport::smtp::authentication::Credentials,
    message::{header, MultiPart, SinglePart, Attachment}

};
use std::env;
use std::fs;

pub async fn send_email_with_resume(email: &str) 
  -> Result<(), Box<dyn std::error::Error>> {

    let smtp_server = env::var("SMTP_SERVER").expect("SMTP_SERVER must be set");
    let smtp_username = env::var("SMTP_USERNAME").expect("SMTP_USERNAME must be set");
    let smtp_password = env::var("SMTP_PASSWORD").expect("SMTP_PASSWORD must be set");
    let no_reply_email = env::var("NO_REPLY_EMAIL").expect("NO_REPLY_EMAIL must be set");
    
    let filename: String = String::from("resume.pdf");
    let file = match fs::read("/usr/src/myapp/resume.pdf") {
        Ok(data) => data,
        Err(err) => {
            eprintln!("Failed to read file: {:?}", err);
            return Err(Box::new(err));
        }
    };
    let content_type = header::ContentType::parse("application/pdf").unwrap();
    let attachment = Attachment::new(filename).body(file, content_type);

    let email_body_text = "Please find attached my resume.";
    let email_body = SinglePart::builder()
        .header(header::ContentType::TEXT_PLAIN)
        .body(email_body_text.to_string());

    let email = Message::builder()
        .from(no_reply_email.parse().unwrap())
        .to(email.parse().unwrap())
        .subject("Your Requested Resume")
        .multipart(MultiPart::mixed()
            .singlepart(email_body)
            .singlepart(attachment))?;

    let creds = Credentials::new(smtp_username, smtp_password);

    let mailer = SmtpTransport::relay(&smtp_server)?
        .credentials(creds)
        .build();

    mailer.send(&email)?;

    Ok(())
}
