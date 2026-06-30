export interface Service {
  id: number
  title: string
  description: string
  category: "Accounting" | "IT"
  icon: string
}

export const services: Service[] = [
  {
    id: 1,
    title: "Bookkeeping & Financial Records",
    description:
      "Accurate day-to-day bookkeeping, ledger maintenance, and financial reporting to keep your business organized and compliant.",
    category: "Accounting",
    icon: "📒",
  },
  {
    id: 2,
    title: "Tax Planning & Compliance",
    description:
      "Strategic tax planning, GST filing, income tax returns, and regulatory compliance to minimize liabilities and avoid penalties.",
    category: "Accounting",
    icon: "📊",
  },
  {
    id: 3,
    title: "Audit & Assurance Services",
    description:
      "Independent audits, internal control reviews, and assurance services that build trust with stakeholders and regulators.",
    category: "Accounting",
    icon: "🔍",
  },
  {
    id: 4,
    title: "Payroll & HR Accounting",
    description:
      "End-to-end payroll processing, statutory deductions, employee benefits accounting, and HR compliance management.",
    category: "Accounting",
    icon: "💼",
  },
  {
    id: 5,
    title: "IT Infrastructure Setup",
    description:
      "Design and deployment of reliable networks, servers, and hardware infrastructure tailored to your business needs.",
    category: "IT",
    icon: "🖥️",
  },
  {
    id: 6,
    title: "Cloud Solutions & Migration",
    description:
      "Seamless migration to cloud platforms, managed cloud services, and optimization for scalability and cost efficiency.",
    category: "IT",
    icon: "☁️",
  },
  {
    id: 7,
    title: "Cybersecurity & Data Protection",
    description:
      "Security assessments, firewall configuration, data backup solutions, and policies to safeguard your critical business data.",
    category: "IT",
    icon: "🔒",
  },
  {
    id: 8,
    title: "Business Software Implementation",
    description:
      "Selection, customization, and integration of accounting software, ERP systems, and productivity tools for your team.",
    category: "IT",
    icon: "⚙️",
  },
]
