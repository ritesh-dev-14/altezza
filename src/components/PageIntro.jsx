function PageIntro({ eyebrow, title, description }) {
  return (
    <main className="page-shell page-intro">
      <p className="eyebrow mb-5 text-xs uppercase">{eyebrow}</p>
      <h1 className="page-title mb-6">{title}</h1>
      <p className="page-description text-base">{description}</p>
    </main>
  )
}

export default PageIntro
