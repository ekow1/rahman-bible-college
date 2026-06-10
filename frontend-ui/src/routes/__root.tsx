import { HeadContent, Scripts, createRootRoute, Outlet, Link } from "@tanstack/react-router"
import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Ramah Bible College | Equipping the Saints",
      },
      {
        name: "description",
        content: "Ramah Bible College - A Spirit-filled Christian institution equipping leaders for ministry through sound biblical education.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: NotFoundComponent,
  component: RootComponent,
})

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-parchment">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container-narrow text-center">
          <span className="text-caption text-gold mb-4 block">404</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Page Not Found</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-stone mb-8 max-w-md mx-auto text-lg">
            The page you are looking for may have been moved, deleted, or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Navigation />
      <Outlet />
      <Footer />
      <Scripts />
    </>
  )
}
