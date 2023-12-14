use lettre::{
    Message, SmtpTransport, Transport, 
    message::{SinglePart, MultiPart, attachment::File},
};
use std::path::Path;
use dotenv::dotenv;
use std::env;

pub async fn send_email_with_resume(email: &str) -> Result<(), lettre::Error> {
    dotenv().ok();

    let smtp_server = env::var("SMTP_SERVER").expect("SMTP_SERVER must be set");
    let smtp_username = env::var("SMTP_USERNAME").expect("SMTP_USERNAME must be set");
    let smtp_password = env::var("SMTP_PASSWORD").expect("SMTP_PASSWORD must be set");
    let dummy_email = env::var("NO_REPLY_EMAIL").expect("NO_REPLY_EMAIL must be set");
    let inbox_email = env::var("INBOX_EMAIL").expect("INBOX_EMAIL must be set");
    
    let email_body = "Please find attached my resume.";

    let email = Message::builder()
        .from(dummy_email.parse().unwrap())
        .to(email.parse().unwrap())
        .subject("Your Requested Resume")
        .multipart(
            MultiPart::mixed()
                .singlepart(SinglePart::plain(email_body))
                .singlepart(
                    File::open(Path::new("path/to/your/resume.pdf"))? 
                        .mime_type("application/pdf") 
                        .build()
                        .into()
                )
        )?;

    let creds = lettre::smtp::authentication::Credentials::new(smtp_username, smtp_password);

    let mailer = SmtpTransport::relay(&smtp_server)?
        .credentials(creds)
        .build();

    mailer.send(&email)?;

    Ok(())
}
