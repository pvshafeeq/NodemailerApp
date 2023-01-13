const bodyParser = require("body-parser");
const express = require("express");
const nodeMailer = require("nodemailer");

const app = new express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post("/", async (req, res) => {
    const { email } = req.body;
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pvshafeeq@gmail.com',
            pass: 'yaypaevfhqxunnih'
        }
    });

    const message = {
        from: 'pvshafeeq@gmail.com',
        to: `${email}`,
        subject: "Test Email using node-mailer",
        // text: "Dear friend, <br> INode mailer assignment successfully completed. ",
        html: '<b>Dear friend, </b><br><br> This is a test email sent with Nodemailer for Assignment #03|| Mail a Friend of ICTAK FSD MERN <br><br> Thanks, <br><b>PV Mohammed Shafeeq</b>'
    }

    let info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);

    res.send("Email sent successfully !");
})


app.listen(port, () => {
    console.log(`the server is listening at http://localhost:${port}`);
})