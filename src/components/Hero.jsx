import { Download, FileText, FolderGit2, Mail } from "lucide-react"
import profilePhoto from "../assets/profile.jpg"
import { profile } from "../data/siteData"
import SocialLinks from "./SocialLinks"

export default function Hero() {
  return (
    <section id="home" className="section-pad mx-auto max-w-6xl">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <p className="text-sm font-medium text-teal-500">{profile.intro}</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-teal-500 md:text-xl">{profile.role}</p>
          <p className="muted mt-5 max-w-xl text-base md:text-lg">{profile.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-teal-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-teal-400"
            >
              <FolderGit2 size={16} aria-hidden="true" />
              View My Projects
            </a>
            <a
              href={profile.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-teal-400 hover:text-teal-400"
            >
              <FileText size={16} aria-hidden="true" />
              View CV
            </a>
            <a
              href={profile.cvPath}
              download={profile.cvDownloadName}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-teal-400 hover:text-teal-400"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-teal-400 hover:text-teal-400"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-4 rounded-full bg-teal-400/20 blur-2xl" aria-hidden="true" />
            <img
              src={profilePhoto}
              alt="Shaik Murthujavali profile photo"
              className="relative h-56 w-56 rounded-full border border-teal-400/40 object-cover object-[center_18%] shadow-[0_0_40px_rgba(45,212,191,0.18)] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
