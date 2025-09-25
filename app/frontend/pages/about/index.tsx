import { Link, usePage } from "@inertiajs/react"

import { Button } from "@/components/ui/button"
import { dashboardPath, signInPath } from "@/routes"
import type { SharedData } from "@/types"


export default function About() {
  const page = usePage<SharedData>()
  const { auth } = page.props
  return (
    <>
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
        <div className="mx-auto flex w-full max-w-5xl justify-between px-4 py-6">
          <h1 className="mb-4 text-2xl font-bold">About Devops Quest</h1>
          <p className="mb-4">
            Devops Quest is a blog and portfolio documenting my journey to learn
            DevOps skills. I share the guides, projects, and resources that help
            me master the art of modern software delivery.
          </p>
        </div>
      </div>
    </>
  )
}
