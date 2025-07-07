"use client"

import { useState, useTransition } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "../actions/contact"

export default function Contact() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{
    success: boolean
    message: string
    errors?: Record<string, string[]>
  } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setResult(result)

      if (result.success) {
        // Reset form on success
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">Get In Touch</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Let's start a conversation</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to
              hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg-primary rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">Email</div>
                  <div className="text-neutral-600 dark:text-neutral-300">stanleydiamond90@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 gradient-bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div> */}
                {/* <div>
                  <div className="font-medium text-neutral-900 dark:text-white">Phone</div>
                  <div className="text-neutral-600 dark:text-neutral-300">+1 (555) 123-4567</div>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">Location</div>
                  <div className="text-neutral-600 dark:text-neutral-300">Federal Capital Teritory, NG</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl shadow-lg border border-white/20 dark:border-neutral-700/50">
            {result && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  result.success
                    ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                    : "bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                {result.success ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <p>{result.message}</p>
              </div>
            )}

            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-600"
                  />
                  {result?.errors?.name && <p className="text-red-500 text-sm mt-1">{result.errors.name[0]}</p>}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-600"
                  />
                  {result?.errors?.email && <p className="text-red-500 text-sm mt-1">{result.errors.email[0]}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-600"
                />
                {result?.errors?.subject && <p className="text-red-500 text-sm mt-1">{result.errors.subject[0]}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-600"
                />
                {result?.errors?.message && <p className="text-red-500 text-sm mt-1">{result.errors.message[0]}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full gradient-bg-primary hover:opacity-90 transition-opacity text-white font-semibold"
              >
                {isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="gradient-bg-secondary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss your project and see how I can help bring your ideas to life.
            </p>
            <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              Schedule a Call
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
