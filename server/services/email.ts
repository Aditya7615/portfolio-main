import { MailService } from '@sendgrid/mail';

// This will be initialized once the API key is provided
let mailService: MailService | null = null;

export interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export function initializeEmailService(apiKey: string | undefined): void {
  if (!apiKey) {
    console.warn("SendGrid API key not provided. Email sending is disabled.");
    return;
  }
  
  try {
    const service = new MailService();
    service.setApiKey(apiKey);
    mailService = service;
    console.log("Email service initialized successfully");
  } catch (error) {
    console.error("Failed to initialize email service:", error);
  }
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!mailService) {
    console.warn("Email service not initialized. Cannot send email.");
    return false;
  }
  
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}