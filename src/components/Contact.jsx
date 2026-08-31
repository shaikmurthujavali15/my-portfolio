import { Mail, Phone, Send } from "lucide-react"
import { useState } from "react"
import { profile } from "../data/siteData"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-pad mx-auto max-w-6xl">
      <SectionHeading eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface rounded-2xl p-6">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl p-2 transition hover:text-teal-400"
                aria-label="Send me an email"
              >
                <Mail size={18} aria-hidden="true" />
                <span>
                  <span className="block text-sm muted">Email</span>
                  {profile.email}
                </span>
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="flex items-center gap-3 rounded-xl p-2 transition hover:text-teal-400">
                <Phone size={18} aria-hidden="true" />
                <span>
                  <span className="block text-sm muted">Phone</span>
                  {profile.phone}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/murthujavali-shaik-a62a79396/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="flex items-center gap-3 rounded-xl p-2 transition hover:text-teal-400"
              >
                <LinkedInIcon />
                <span>
                  <span className="block text-sm muted">LinkedIn</span>
                  murthujavali-shaik
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shaikmurthujavali15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="flex items-center gap-3 rounded-xl p-2 transition hover:text-teal-400"
              >
                <GitHubIcon />
                <span>
                  <span className="block text-sm muted">GitHub</span>
                  shaikmurthujavali15
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="surface rounded-2xl p-6">
          <p className="muted mb-4 text-sm">
            This form opens your email app with your message. No data is sent to a server.
          </p>
          <label className="mb-4 block">
            <span className="mb-1 block text-sm">Name</span>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
              autoComplete="name"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-1 block text-sm">Email</span>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
              autoComplete="email"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-1 block text-sm">Message</span>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-teal-400"
          >
            <Send size={16} aria-hidden="true" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
