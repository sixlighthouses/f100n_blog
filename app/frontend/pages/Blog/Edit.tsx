import { Head, Link } from "@inertiajs/react"
import Form from "./Form"
import { BlogType } from "./types"

interface EditProps {
  blog: BlogType
}

export default function Edit({ blog }: EditProps) {
  return (
    <>
      <Head title="Editing blog" />

      <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
        <h1 className="text-4xl font-bold">Editing blog</h1>

        <Form
          blog={blog}
          onSubmit={(form) => {
            form.transform((data) => ({ blog: data }))
            form.patch(`/blogs/${blog.id}`)
          }}
          submitText="Update Blog"
        />

        <Link
          href={`/blogs/${blog.id}`}
          className="ml-2 inline-block rounded-lg bg-gray-100 px-5 py-3 font-medium"
        >
          Show this blog
        </Link>
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
