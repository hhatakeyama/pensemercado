export default function Card({ children, icon, title, text, cta, href, ctaProps }) {
  return (
    <div className="p-5 rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 shadow-md shadow-slate-950">
      {!!title && (
        <div className="flex gap-4 items-center mb-3">
          {icon && <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">{icon}</div>}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      )}
      {!!text && <p className="text-slate-400 text-sm">{text}</p>}
      {cta && (
        <>
          <div className="h-px bg-white/10 my-4" />
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 transition hover:bg-slate-800" href={href} rel="noopener noreferrer" {...ctaProps}>
            {cta}
          </a>
        </>
      )}
      {children}
    </div>
  )
}