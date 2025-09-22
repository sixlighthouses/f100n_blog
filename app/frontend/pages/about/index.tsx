import { Head, Link, usePage } from "@inertiajs/react"

import { aboutPath, dashboardPath, signInPath } from "@/routes"
import type { BreadcrumbItem, SharedData } from "@/types"
import { Button } from "@/components/ui/button"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "About",
    href: aboutPath(),
  },
]

export default function About() {
  const page = usePage<SharedData>()
  const { auth } = page.props
  return (
    <>
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
    <Head title={breadcrumbs[breadcrumbs.length - 1].title} /><div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
      <h1 className="mb-4 text-2xl font-bold">About Devops Quest</h1>
      <p className="mb-4">
        Devops Quest is a blog and portfolio documenting my journey to learn
        DevOps skills. I share the guides, projects, and resources that help
        me master the art of modern software delivery.
      </p>
    </div>
    </div></>
  
  )
}
