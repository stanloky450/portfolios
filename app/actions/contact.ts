"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Validate the form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please check your form data and try again.",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // Simulate sending email (replace with actual email service)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Send to a webhook

    console.log("Contact form submission:", { name, email, subject, message })

    return {
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
