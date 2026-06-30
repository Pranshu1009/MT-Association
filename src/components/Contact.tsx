  import { useState, type FormEvent } from "react"
  import { contactConfig, getMailtoUrl, getWhatsAppUrl } from "../config/contact"
  import { containerClass, proseClass } from "../lib/layout"
  import { WhatsAppIcon } from "./Hero"

  interface FormData {
    name: string
    email: string
    phone: string
    service: string
    message: string
  }

  const initialForm: FormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  }

  function buildMessage(data: FormData) {
    return [
      `Hello MT & Associates,`,
      ``,
      `My name is ${data.name}.`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.service ? `Service interested in: ${data.service}` : "",
      ``,
      `Message:`,
      data.message,
    ]
      .filter(Boolean)
      .join("\n")
  }

  export default function Contact() {
    const [form, setForm] = useState<FormData>(initialForm)
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

    function updateField(field: keyof FormData, value: string) {
      setForm((prev) => ({ ...prev, [field]: value }))
    }

    async function handleSubmit(e: FormEvent) {
      e.preventDefault()
      setStatus("sending")

      const subject = `New inquiry from ${form.name} — MT & Associates Website`
      const body = buildMessage(form)

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${contactConfig.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message,
            _subject: subject,
          }),
        })

        if (!response.ok) throw new Error("Failed to send")

        setStatus("sent")
        setForm(initialForm)

        window.open(getWhatsAppUrl(body), "_blank", "noopener,noreferrer")
      } catch {
        const mailto = getMailtoUrl(subject, body)
        window.location.href = mailto
        setStatus("sent")
      }
    }

    function handleWhatsAppOnly() {
      const body = buildMessage(form)
      if (!form.name && !form.message) {
        window.open(
          getWhatsAppUrl("Hi, I'd like to inquire about your services."),
          "_blank",
          "noopener,noreferrer",
        )
        return
      }
      window.open(getWhatsAppUrl(body), "_blank", "noopener,noreferrer")
    }

    return (
      <section id="contact" className="bg-navy-950 py-20 sm:py-28">
        <div className={containerClass}>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">Contact Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Start a Conversation
            </h2>
            <p className={`mx-auto mt-4 ${proseClass} text-slate-400`}>
              Reach out via phone, WhatsApp, or the form below. We typically respond within one
              business day.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <ContactCard
                icon="📞"
                title="Call Us"
                content={contactConfig.phone}
                action={
                  <a
                    href={`tel:${contactConfig.phoneDial}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    Call Now
                  </a>
                }
              />

              <ContactCard
                icon="💬"
                title="WhatsApp"
                content="Chat with us directly on WhatsApp for quick responses."
                action={
                  <a
                    href={getWhatsAppUrl("Hi, I'd like to inquire about MT & Associates services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                  >
                    <WhatsAppIcon />
                    Message on WhatsApp
                  </a>
                }
              />

              <ContactCard
                icon="✉️"
                title="Email"
                content={contactConfig.email}
                action={
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    Send Email
                  </a>
                }
              />

              <ContactCard
                icon="📍"
                title="Office"
                content={
                  <span>
                    {contactConfig.address}
                    <br />
                    <span className="text-slate-400">{contactConfig.businessHours}</span>
                  </span>
                }
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8 lg:col-span-3"
            >
              <h3 className="font-display text-xl font-bold text-white">Send Us a Message</h3>
              <p className="mt-1 text-sm text-slate-400">
                Your message will be sent to our email and you can follow up on WhatsApp.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="input-field"
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="input-field"
                    placeholder="you@email.com"
                  />
                </Field>

                <Field label="Phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="input-field"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Field>

                <Field label="Service Interested In">
                  <select
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    <option value="Bookkeeping">Bookkeeping & Financial Records</option>
                    <option value="Tax">Tax Planning & Compliance</option>
                    <option value="Audit">Audit & Assurance</option>
                    <option value="Payroll">Payroll & HR Accounting</option>
                    <option value="IT Infrastructure">IT Infrastructure Setup</option>
                    <option value="Cloud">Cloud Solutions & Migration</option>
                    <option value="Cybersecurity">Cybersecurity & Data Protection</option>
                    <option value="Software">Business Software Implementation</option>
                  </select>
                </Field>
              </div>

              <Field label="Message" required className="mt-4">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="input-field resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </Field>

              {status === "sent" && (
                <p className="mt-4 rounded-lg bg-emerald-500/20 px-4 py-3 text-sm text-emerald-300">
                  Thank you! Your message has been sent. A WhatsApp window has been opened so you can
                  follow up directly.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 rounded-lg bg-red-500/20 px-4 py-3 text-sm text-red-300">
                  Something went wrong. Please try calling or messaging us on WhatsApp.
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex-1 rounded-lg bg-gold-500 py-3 font-semibold text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppOnly}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#25D366] py-3 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
                >
                  <WhatsAppIcon />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

  function ContactCard({
    icon,
    title,
    content,
    action,
  }: {
    icon: string
    title: string
    content: React.ReactNode
    action?: React.ReactNode
  }) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <span className="text-2xl" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="mt-3 font-semibold text-white">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{content}</div>
        {action && <div className="mt-4">{action}</div>}
      </div>
    )
  }

  function Field({
    label,
    required,
    className = "",
    children,
  }: {
    label: string
    required?: boolean
    className?: string
    children: React.ReactNode
  }) {
    return (
      <label className={`block ${className}`}>
        <span className="mb-1.5 block text-sm font-medium text-slate-300">
          {label}
          {required && <span className="text-gold-400"> *</span>}
        </span>
        {children}
      </label>
    )
  }
