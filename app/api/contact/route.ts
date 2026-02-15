import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Remplace par ton domaine vérifié
      to: ['dev.nadhirbk@gmail.com'], // Ton email
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F0F; border-radius: 16px; overflow: hidden;">
          <!-- Header -->
          <div style="background-color: #7C3AED; padding: 32px 40px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">Nadhir B.K.</h1>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <h2 style="margin: 0 0 24px 0; color: #ffffff; font-size: 24px; font-weight: 800;">Nouveau message</h2>

            <!-- Sender info -->
            <div style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <table style="width: 100%;">
                <tr>
                  <td style="color: rgba(255,255,255,0.5); font-size: 13px; padding-bottom: 12px; width: 60px;">De</td>
                  <td style="color: #ffffff; font-size: 15px; font-weight: 600; padding-bottom: 12px;">${name}</td>
                </tr>
                <tr>
                  <td style="color: rgba(255,255,255,0.5); font-size: 13px;">Email</td>
                  <td><a href="mailto:${email}" style="color: #7C3AED; font-size: 15px; text-decoration: none;">${email}</a></td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px;">
              <p style="margin: 0 0 8px 0; color: rgba(255,255,255,0.5); font-size: 13px;">Message</p>
              <p style="margin: 0; color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.3); font-size: 12px;">Envoyé depuis le formulaire de contact — nadhirbk.com</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: 'Email envoyé avec succès', data }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
