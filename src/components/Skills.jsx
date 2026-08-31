import { Braces, Code2, Users } from "lucide-react"
import { skillGroups } from "../data/siteData"
import SectionHeading from "./SectionHeading"

const icons = [Code2, Braces, Users]

export default function Skills() {
  return (
    <section id="skills" className="section-pad mx-auto max-w-6xl">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index]
          return (
            <article key={group.title} className="surface rounded-2xl p-6 shadow-sm transition hover:-translate-y-1">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-500">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
