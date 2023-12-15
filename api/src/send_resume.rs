use lettre::{
    Message, 
    SmtpTransport, 
    Transport, 
    transport::smtp::authentication::Credentials,

};
use dotenv::dotenv;
use std::env;

pub async fn send_email_with_resume(email: &str) 
  -> Result<(), Box<dyn std::error::Error>> {
    dotenv().ok();

    let smtp_server = env::var("SMTP_SERVER").expect("SMTP_SERVER must be set");
    let smtp_username = env::var("SMTP_USERNAME").expect("SMTP_USERNAME must be set");
    let smtp_password = env::var("SMTP_PASSWORD").expect("SMTP_PASSWORD must be set");
    let no_reply_email = env::var("NO_REPLY_EMAIL").expect("NO_REPLY_EMAIL must be set");
    
    let email_body = "Please find attached my resume.";

    let email = Message::builder()
        .from(no_reply_email.parse().unwrap())
        .to(email.parse().unwrap())
        .subject("Your Requested Resume")
        .body(email_body.to_string())?;

    let creds = Credentials::new(smtp_username, smtp_password);

    let mailer = SmtpTransport::relay(&smtp_server)?
        .credentials(creds)
        .build();

    mailer.send(&email)?;

    Ok(())
}
