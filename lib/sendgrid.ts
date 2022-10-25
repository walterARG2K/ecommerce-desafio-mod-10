import * as sgMail from "@sendgrid/mail";
const API_KEY =
    (process.env.SENDGRID_APIKEY as string) ||
    "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";
sgMail.setApiKey(API_KEY);

async function sendgridMail(msg: sgMail.MailDataRequired) {
    return await sgMail.send(msg);
}

export { sendgridMail };
