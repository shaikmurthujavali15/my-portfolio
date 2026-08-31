import { Award, ExternalLink } from "lucide-react"
import { certificates } from "../data/siteData"
import SectionHeading from "./SectionHeading"

function HackerRankMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2zm3.2 13.4h-1.6V8.6h1.6v6.8zm-4.8 0H8.8V8.6h1.6v6.8z"
      />
    </svg>
  )
}

export default function Certificates() {
  const certificate = certificates[0]

  return (
    <section id="certificate" className="section-pad mx-auto max-w-6xl">
      <SectionHeading eyebrow="Certificate" title="Certification" />
      <article className="surface mx-auto max-w-xl rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <a
            href={certificate.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View HackerRank certificate"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-500 transition hover:bg-teal-500/25"
          >
            <HackerRankMark />
          </a>
          <div>
            <h3 className="text-xl font-semibold">{certificate.title}</h3>
            <p className="muted">{certificate.platform}</p>
            <p className="mt-1 text-sm text-teal-500">{certificate.date}</p>
          </div>
        </div>
        <a
          href={certificate.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-teal-400"
        >
          <Award size={16} aria-hidden="true" />
          View Certificate
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </article>
    </section>
  )
}
