export const profile = {
  name: "SHAIK MURTHUJAVALI",
  shortName: "Shaik Murthujavali",
  role: "B.Tech CSE Student",
  intro: "Hi, I'm",
  description:
    "Computer Science and Engineering student interested in programming, problem-solving, software development, and web development.",
  email: "murthujavalishaik12@gmail.com",
  phone: "+91 9100940780",
  phoneHref: "tel:+919100940780",
  cvPath: "/Shaik-Murthujavali-CV.pdf",
  cvDownloadName: "Shaik-Murthujavali-CV.pdf",
}

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificate", label: "Certificate" },
  { id: "contact", label: "Contact" },
]

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/murthujavali-shaik-a62a79396/",
    ariaLabel: "Visit my LinkedIn profile",
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/shaikmurthujavali15",
    ariaLabel: "Visit my GitHub profile",
    icon: "github",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:murthujavalishaik12@gmail.com",
    ariaLabel: "Send me an email",
    icon: "mail",
  },
]

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Tools / Technologies",
    items: ["HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    title: "Soft Skills",
    items: ["Problem-Solving", "Communication", "Teamwork", "Adaptability"],
  },
]

export const projects = [
  {
    title: "Web-Based Hostel Management System",
    date: "March 2026",
    description:
      "Developed a web-based hostel management system to digitize student registration, room allocation, and complaint management. Implemented separate Student and Admin modules with role-specific functionality.",
    studentModule: [
      "Self-registration",
      "Roll number verification",
      "Login",
      "Profile viewing",
      "Room details",
      "Complaint submission",
    ],
    adminModule: [
      "Student management",
      "Room allocation",
      "Vacancy tracking",
      "Complaint handling",
    ],
    stack: {
      backend: "Python Flask",
      database: "MongoDB Atlas",
      frontend: ["HTML", "Tailwind CSS"],
    },
  },
]

export const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    credential: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    dates: "August 2026 – Present",
  },
  {
    institution: "Dr. K. V. Subba Reddy Institute of Technology",
    location: "Kurnool, Andhra Pradesh",
    credential: "Diploma in Computer Engineering",
    field: "Computer Engineering",
    dates: "June 2023 – April 2026",
    percentage: "84%",
  },
  {
    institution: "Sri Navanandi High School",
    location: "Nandikotkur, Andhra Pradesh",
    credential: "Matriculation",
    dates: "June 2022 – April 2023",
    percentage: "91%",
  },
]

export const certificates = [
  {
    title: "Python (Basic)",
    platform: "HackerRank",
    date: "August 2026",
    href: "https://www.hackerrank.com/certificates/iframe/a13c57585972",
  },
]
