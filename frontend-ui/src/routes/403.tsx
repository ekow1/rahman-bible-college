import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/403")({
  component: ForbiddenPage,
})

function ForbiddenPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <main className="pt-32 pb-24">
        <div className="container-narrow text-center">
          <span className="text-caption text-gold mb-4 block">403</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Access Forbidden</h1>
          <div className="rule-gold mx-auto mb-8" style={{ width: '8rem' }} />
          <p className="text-stone mb-8 max-w-md mx-auto text-lg">
            You do not have permission to access this page. Please contact an administrator if you believe this is an error.
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
    </div>
  )
}
