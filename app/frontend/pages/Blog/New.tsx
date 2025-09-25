import { Head, Link } from "@inertiajs/react"

import Form from "./Form"
import type { BlogType } from "./types"

interface NewProps {
  blog: BlogType
}

export default function New({ blog }: NewProps) {
  return (
    <>
      <Head title="New blog" />

      <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
        <h1 className="text-4xl font-bold">New blog</h1>

        <Form
          blog={blog}
          onSubmit={(form) => {
            form.transform((data) => ({ blog: data }))
            form.post("/blogs")
          }}
          submitText="Create Blog"
        />

        <Link
          href="/blogs"
          className="ml-2 inline-block rounded-lg bg-gray-100 px-5 py-3 font-medium"
        >
          Back to blogs
        </Link>
      </div>
    </>
  )
}
