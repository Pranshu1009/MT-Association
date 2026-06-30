import { containerClass, proseClass } from "../lib/layout";

const services = [
  {
    id: 1,
    title: "GST Registration",
    category: "Accounting",
    icon: "📝",
    description:
      "Complete assistance with GST registration, amendments, cancellation, and compliance to help businesses get started and remain legally compliant.",
  },
  {
    id: 2,
    title: "GST Return Filing",
    category: "Accounting",
    icon: "📄",
    description:
      "Accurate preparation and filing of GSTR-1, GSTR-3B, and Annual GST Returns with timely compliance and error-free submissions.",
  },
  {
    id: 3,
    title: "TDS Services",
    category: "Accounting",
    icon: "💰",
    description:
      "Professional TDS calculation, TDS return filing, Form 16 and Form 16A preparation, ensuring complete tax compliance.",
  },
  {
    id: 4,
    title: "Income Tax Return Filing",
    category: "Accounting",
    icon: "📑",
    description:
      "Income tax return filing for individuals, salaried employees, professionals, and businesses with complete accuracy and compliance.",
  },
  {
    id: 5,
    title: "Bookkeeping & Accounting",
    category: "Accounting",
    icon: "📚",
    description:
      "Professional bookkeeping using Zoho Books and TallyPrime, including ledger maintenance, purchase & sales entries, expense tracking, and complete financial record management.",
  },
  {
    id: 6,
    title: "Bank Reconciliation",
    category: "Accounting",
    icon: "🏦",
    description:
      "Regular bank reconciliation to match accounting records with bank statements, identify discrepancies, and maintain accurate financial records.",
  },
  {
    id: 7,
    title: "Financial Statements & MIS Reports",
    category: "Accounting",
    icon: "📊",
    description:
      "Preparation of Profit & Loss Account, Balance Sheet, Cash Flow Statements, and customized MIS reports for better financial planning and informed business decisions.",
  },
  {
    id: 8,
    title: "Website Development",
    category: "IT Services",
    icon: "💻",
    description:
      "Custom business websites, portfolio websites, landing pages, and responsive web applications designed to strengthen your online presence and help your business grow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className={containerClass}>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
            Our Services
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Comprehensive Solutions for Your Business
          </h2>

          <p className={`mx-auto mt-4 ${proseClass} text-slate-600`}>
            We provide professional accounting and website development services
            to help businesses stay compliant, manage finances efficiently, and
            build a strong online presence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10"
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-3xl"
                  role="img"
                  aria-label={service.title}
                >
                  {service.icon}
                </span>

                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    service.category === "Accounting"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {service.category}
                </span>
              </div>

              <h3 className="mt-4 font-semibold text-navy-900 group-hover:text-navy-700">
                {service.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}