import { Head } from "@inertiajs/react"

import AppLayout from "@/layouts/app-layout"



export default function About() {
  return (
    <AppLayout>
      <Head title="About"/>

      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4">About Devops Quest</h1>
        <p className="mb-4">
          Devops Quest is a blog and portfolio documenting my journey to learn DevOps skills.
          I share the guides, projects, and resources that help me master the art of modern software delivery.
        </p>
      </div>
    </AppLayout>
  )
}
