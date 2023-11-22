import { sendEmail } from "@netlify/emails";

exports.handler = async function (event, condition, callback) {
    await sendEmail({
        from: event.email,
        to: "liamkopke@gmail.com",
        subject: event.subject,
        template: "base",
        parameters: {
            name: event.name,
            email: event.email,
            message: event.message,
        },
    });
    callback(null, { statusCode: 200 });
};