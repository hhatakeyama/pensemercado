export default function Content({ children }) {
  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        {children}
      </div>
    </section>
  )
}