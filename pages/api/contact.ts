const Method = require("micro-method-router");
import { NextApiRequest, NextApiResponse } from "next";
import { sendgridMail } from "lib/sendgrid";

async function sendMessage(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, message, name } = req.body;
        const msg = {
            to: process.env.EMAIL_PERSONAL || "walterortiz2k20@gmail.com",
            from: "daniwortiz003@gmail.com",
            subject: `consulta del cliente ${name}`,
            html: message + ` email =>${email}`,
        };
        await sendgridMail(msg);
        res.send("sent");
    } catch (e) {
        res.status(400).json(e);
    }
}

export default Method({ post: sendMessage });
