import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: "khzl ugls pffa avlv",
    },
    tls: {
        rejectUnauthorized: false // Accept self-signed certificates
    }
})

export default transporter