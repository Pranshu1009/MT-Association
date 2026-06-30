/**
 * Update these values with your real contact details.
 * WhatsApp number: country code + number, no spaces or symbols (e.g. 919876543210 for India).
 */
export const contactConfig = {
  email: "contactmtassociates@gmail.com",
  phone: "+91 74985 55935",
  phoneDial: "+917498555935",
  whatsapp: "917498555935",
  businessHours: "Mon – Sat: 9:00 AM – 6:00 PM",
  address: "Mumbai, Maharashtra, India",
} as const

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${contactConfig.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getMailtoUrl(subject: string, body: string) {
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
