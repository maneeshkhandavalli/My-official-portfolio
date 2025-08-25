import nodemailer from "nodemailer"

export default async function handler(req, res){
    if (req.method !== "POST"){
        res.status(405).json({ error: "Method not allowed" })
        return
    }

    try{
        const { name, email, message } = req.body || {}

        if (!name || !email || !message){
            res.status(400).json({ error: "Missing fields" })
            return
        }

        const gmailUser = process.env.GMAIL_USER
        const gmailPass = process.env.GMAIL_PASS
        const toEmail = process.env.TO_EMAIL || gmailUser

        if (!gmailUser || !gmailPass){
            res.status(500).json({ error: "Email service not configured" })
            return
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailPass,
            },
        })

        const mailOptions = {
            from: `Portfolio Contact <${gmailUser}>`,
            to: toEmail,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        }

        await transporter.sendMail(mailOptions)
        res.status(200).json({ ok: true })
    }catch(err){
        res.status(500).json({ error: "Failed to send email" })
    }
}


