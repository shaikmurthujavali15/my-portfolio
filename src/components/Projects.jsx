import { Database, Layout, Server } from "lucide-react"
import { projects } from "../data/siteData"
import SectionHeading from "./SectionHeading"

export default function Projects() {
  const project = projects[0]

  return (
    <section id="projects" className="section-pad mx-auto max-w-6xl">
      <SectionHeading eyebrow="Projects" title="Selected work" />
      <article className="surface rounded-2xl p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="muted mt-1 text-sm">{project.date}</p>
          </div>
        </div>
        <p className="muted mt-5 max-w-3xl">{project.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] p-5">
            <h4 className="font-semibold">Student Module</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {project.studentModule.map((item) => (
                <li key={item} className="muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-5">
            <h4 className="font-semibold">Admin Module</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {project.adminModule.map((item) => (
                <li key={item} className="muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold">Technology stack</h4>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-sm">
              <Server size={14} aria-hidden="true" />
              Backend: {project.stack.backend}
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-sm">
              <Database size={14} aria-hidden="true" />
              Database: {project.stack.database}
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-sm">
              <Layout size={14} aria-hidden="true" />
              Frontend: {project.stack.frontend.join(", ")}
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
