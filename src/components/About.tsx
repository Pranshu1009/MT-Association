import { containerClass, proseClass } from "../lib/layout"

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">About Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
              Your Partner in Financial & Accounting 
            </h2>
            <p className={`mt-6 ${proseClass} text-slate-600`}>
              MT & Associates is a professional accounting and business consulting firm dedicated to helping businesses stay compliant, organized, and growth-focused. With years of practical experience handling businesses of all sizes, we provide reliable accounting, taxation, compliance, and financial reporting services.
            </p>
            <p className={`mt-4 ${proseClass} text-slate-600`}>
             Along with accounting expertise, we also offer professional website development services to help businesses establish a strong online presence. Our goal is to simplify finance and technology so you can focus on growing your business.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Integrity First",
                text: "Transparent practices and ethical standards in every engagement.",
              },
              {
                title: "Expert Team",
                text: "Qualified professionals with domain expertise in finance and technology.",
              },
              {
                title: "Tailored Solutions",
                text: "Services customized to your industry, size, and growth stage.",
              },
              {
                title: "Timely Delivery",
                text: "Deadlines met with accuracy — because compliance waits for no one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
