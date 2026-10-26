import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <Navbar isHome={isHome} />
      <Outlet />
      {!isHome && <Footer />}
    </div>
  )
}

export default Layout
