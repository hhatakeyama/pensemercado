export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="container mx-auto px-5">
        <h3 className="text-3xl font-extrabold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-8">{subtitle}</p>
        {children}
      </div>
    </section>
  )
}