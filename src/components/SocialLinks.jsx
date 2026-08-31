import { Mail } from "lucide-react"
import { socialLinks } from "../data/siteData"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"

const icons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  mail: Mail,
}

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = icons[link.icon]
        const isExternal = link.href.startsWith("http")
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={link.ariaLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-400"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
