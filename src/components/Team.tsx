import { containerClass, proseClass } from "../lib/layout";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Mithilesh Maurya",
    initials: "MM",
    role: "Managing Partner",
    bio: "Accounting professional with extensive experience in GST compliance, taxation, bookkeeping, financial reporting, and business advisory services for clients across various industries.",
  },
  {
    id: 2,
    name: "Mr. Ayush Tiwari",
    initials: "AT",
    role: "Senior Accountant",
    bio: "Specializes in GST filing, TDS compliance, bookkeeping in Zoho Books and TallyPrime, bank reconciliation, and preparation of financial statements and MIS reports.",
  },
  {
    id: 3,
    name: "Mr. Prabhakar Tiwari",
    initials: "PT",
    role: "Website Development Lead",
    bio: "Full-stack web developer specializing in responsive business websites, modern web applications, and digital solutions that help businesses establish a strong online presence.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-20 sm:py-28">
      <div className={containerClass}>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
            Our Team
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Meet Our Core Members
          </h2>

          <p className={`mx-auto mt-4 ${proseClass} text-slate-600`}>
            Our experienced professionals are committed to delivering reliable
            accounting services and innovative website development solutions to
            help businesses grow with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 text-2xl font-bold text-gold-400">
                {member.initials}
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-navy-950">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-gold-500">
                {member.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}