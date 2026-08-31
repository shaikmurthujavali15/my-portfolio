import { education } from "../data/siteData"
import SectionHeading from "./SectionHeading"

export default function Education() {
  return (
    <section id="education" className="section-pad mx-auto max-w-6xl">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <ol className="relative mx-auto max-w-3xl border-l border-[var(--border)] pl-6">
        {education.map((item) => (
          <li key={item.institution} className="relative mb-10 last:mb-0">
            <span
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-teal-400"
              aria-hidden="true"
            />
            <article className="surface rounded-2xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <p className="muted text-sm">{item.location}</p>
              <p className="mt-3 font-medium">{item.credential}</p>
              {item.field ? <p className="muted text-sm">{item.field}</p> : null}
              <p className="mt-2 text-sm text-teal-500">{item.dates}</p>
              {item.percentage ? <p className="mt-1 text-sm">Percentage: {item.percentage}</p> : null}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
