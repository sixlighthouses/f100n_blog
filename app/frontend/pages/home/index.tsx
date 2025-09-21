
import { Head, Link, usePage } from "@inertiajs/react"

import { Button } from "@/components/ui/button"
import { dashboardPath, signInPath } from "@/routes"
import type { SharedData } from "@/types"

export default function Welcome() {
  const page = usePage<SharedData>()
  const { auth } = page.props

  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#0a0a0a] dark:to-[#23272f] flex flex-col">
        <header className="w-full px-4 py-6 flex justify-between items-center max-w-5xl mx-auto">
          <span className="font-bold text-xl tracking-tight text-primary">devops quest</span>
          <nav className="flex items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {auth.user ? (
              <Button asChild variant="outline">
                <Link href={dashboardPath()}>Dashboard</Link>
              </Button>
            ) : (
              <Button asChild variant="ghost">
                <Link href={signInPath()}>Log in</Link>
              </Button>
            )}
          </nav>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <section className="w-full max-w-3xl text-center py-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Devops Quest
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A blog and portfolio documenting my quest to learn DevOps skills.
              I share the guides, projects, and resources that help me master the art of modern software delivery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={auth.user ? dashboardPath() : signInPath()}>
                  {auth.user ? "Go to Dashboard" : "Get Started"}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </section>

          <section className="w-full max-w-4xl grid md:grid-cols-3 gap-8 mt-8">
            <div className="rounded-xl bg-white/80 dark:bg-[#18181b] shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">📚</span>
              <h2 className="font-semibold text-lg mb-1">DevOps Resources</h2>
              <p className="text-sm text-muted-foreground">Step-by-step guides, tutorials, and best practices for CI/CD, cloud, automation, and more.</p>
            </div>
            <div className="rounded-xl bg-white/80 dark:bg-[#18181b] shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">🛠️</span>
              <h2 className="font-semibold text-lg mb-1">Projects & Portfolio</h2>
              <p className="text-sm text-muted-foreground">DevOps projects, tools, and contributions. Build your professional presence.</p>
            </div>
            <div className="rounded-xl bg-white/80 dark:bg-[#18181b] shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">🤝</span>
              <h2 className="font-semibold text-lg mb-1">Community</h2>
              <p className="text-sm text-muted-foreground">Connect with other learners, share knowledge, and grow together in your DevOps journey.</p>
            </div>
          </section>
        </main>

        <footer className="w-full py-6 text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} DevOps Quest. Built by <span className="text-blue-600">sixlighthouses</span>.
        </footer>
      </div>
    </>
  )
}
