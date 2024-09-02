export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const {EMAIL_USER, EMAIL_PASS, MY_EMAIL} = process.env

export async function POST(req: NextRequest) {
    const { name, email, message, subject } = await req.json();

    if (!EMAIL_USER || !EMAIL_PASS) {
      return NextResponse.json({ message: 'Error de configuración de correo electrónico' });
    }


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: MY_EMAIL,
        subject: "Contacto portfolio",
        text: `Nombre: ${name}\nCorreo electronico: ${email}\n\nAsunto:${subject}\n\nMensaje:\n${message}`,
      });
      return NextResponse.json({ message: 'Email enviado correctamente' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      return NextResponse.json({ message: 'Error al enviar el correo electrónico' });
    }
};