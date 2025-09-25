import { Head, Link, usePage } from "@inertiajs/react"

import { Button } from "@/components/ui/button"
import { blogsPath, dashboardPath, signInPath } from "@/routes"
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

      <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#0a0a0a] dark:to-[#23272f]">
        <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-6">
          <span className="text-primary text-xl font-bold tracking-tight">
            devops quest
          </span>
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

        <main className="flex flex-1 flex-col items-center justify-center px-4">
          <section className="w-full max-w-3xl py-16 text-center">
            <h1 className="mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
              Devops Quest
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg md:text-2xl">
              A blog and portfolio documenting my quest to learn DevOps skills.
              I share the guides, projects, and resources that help me master
              the art of modern software delivery.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={blogsPath()}>Read the blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://books.sixlighthouses.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View documentation
                </Link>
              </Button>
            </div>
          </section>

          <section className="mt-8 grid w-full max-w-4xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white/80 p-6 shadow dark:bg-[#18181b]">
              <span className="mb-2 text-3xl">📚</span>
              <h2 className="mb-1 text-lg font-semibold">DevOps Resources</h2>
              <p className="text-muted-foreground text-sm">
                Step-by-step guides, tutorials, and best practices for CI/CD,
                cloud, automation, and more.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white/80 p-6 shadow dark:bg-[#18181b]">
              <span className="mb-2 text-3xl">🛠️</span>
              <h2 className="mb-1 text-lg font-semibold">
                Projects & Portfolio
              </h2>
              <p className="text-muted-foreground text-sm">
                DevOps projects, tools, and contributions. Build your
                professional presence.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white/80 p-6 shadow dark:bg-[#18181b]">
              <span className="mb-2 text-3xl">🤝</span>
              <h2 className="mb-1 text-lg font-semibold">Community</h2>
              <p className="text-muted-foreground text-sm">
                Connect with other learners, share knowledge, and grow together
                in your DevOps journey.
              </p>
            </div>
          </section>
        </main>

        <footer className="text-muted-foreground mt-8 w-full py-6 text-center text-xs">
          &copy; {new Date().getFullYear()} DevOps Quest. Built by{" "}
          <span className="text-blue-600">sixlighthouses</span>.
        </footer>
      </div>
    </>
  )
}
