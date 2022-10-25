import * as sgMail from "@sendgrid/mail";
const API_KEY = process.env.SENDGRID_APIKEY as string;
sgMail.setApiKey(API_KEY);

async function sendgridMail(msg: sgMail.MailDataRequired) {
    return await sgMail.send(msg);
}

export { sendgridMail };
