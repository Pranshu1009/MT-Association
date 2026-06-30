export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  initials: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Manish Tiwari",
    role: "Managing Partner",
    bio: "Chartered Accountant with 15+ years of experience in audit, taxation, and business advisory for SMEs and corporates.",
    initials: "MT",
  },
  {
    id: 2,
    name: "Ms. Priya Sharma",
    role: "Senior Accountant",
    bio: "Expert in financial reporting, GST compliance, and payroll management with a track record of delivering accurate, timely accounts.",
    initials: "PS",
  },
  {
    id: 3,
    name: "Mr. Rahul Verma",
    role: "IT Solutions Lead",
    bio: "Technology specialist focused on cloud infrastructure, cybersecurity, and digital transformation for growing businesses.",
    initials: "RV",
  },
]
