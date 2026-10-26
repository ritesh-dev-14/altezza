import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-ivory text-charcoal">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-24">
        <div>
          <Link
            className="font-serif text-xl tracking-[0.2em] text-charcoal"
            to="/"
          >
            ALTEZZA
          </Link>
          <p className="mt-3 text-xs text-charcoal/60">
            Considered kitchens and interiors.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-[10px] uppercase tracking-[0.16em] text-charcoal/70">
          <Link className="transition-colors hover:text-charcoal" to="/kitchens">
            Kitchens
          </Link>
          <Link className="transition-colors hover:text-charcoal" to="/wardrobes">
            Wardrobes
          </Link>
          <Link className="transition-colors hover:text-charcoal" to="/design">
            Design
          </Link>
          <Link className="transition-colors hover:text-charcoal" to="/materials">
            Materials
          </Link>
          <Link className="transition-colors hover:text-charcoal" to="/projects">
            Projects
          </Link>
          <Link className="transition-colors hover:text-charcoal" to="/about">
            About
          </Link>
          <Link className="transition-colors hover:text-charcoal" to="/contact">
            Contact
          </Link>
        </div>
        <p className="text-[10px] uppercase tracking-[0.16em] text-charcoal/50 lg:col-span-2">
          © ALTEZZA
        </p>
      </div>
    </footer>
  )
}

export default Footer
