export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-teal-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="muted mt-3 text-base md:text-lg">{description}</p> : null}
    </div>
  )
}
