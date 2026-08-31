import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-6xl">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="surface mx-auto max-w-3xl rounded-2xl p-6 shadow-sm md:p-8">
        <p className="muted text-base leading-relaxed md:text-lg">
          I am a B.Tech Computer Science and Engineering student at Lovely Professional University,
          Phagwara, Punjab. I have knowledge of C, C++, Java, and Python, along with HTML, CSS,
          JavaScript, and SQL. I am interested in programming, problem-solving, and web development,
          and I am developing my technical skills through projects and continued learning.
        </p>
      </div>
    </section>
  )
}
