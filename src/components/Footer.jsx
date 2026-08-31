import { profile } from "../data/siteData"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <p className="font-semibold">{profile.name}</p>
        <p className="muted text-sm">{profile.role}</p>
        <SocialLinks />
        <p className="muted text-sm">© 2026 Shaik Murthujavali. All rights reserved.</p>
      </div>
    </footer>
  )
}
