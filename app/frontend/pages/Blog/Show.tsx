import { Head, Link } from "@inertiajs/react"
import Blog from "./Blog"
import { BlogType } from "./types"

interface ShowProps {
  blog: BlogType
  flash: { notice?: string }
}

export default function Show({ blog, flash }: ShowProps) {
  return (
    <>
      <Head title={`Blog #${blog.id}`} />

      <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
        <div className="mx-auto">
          {flash.notice && (
            <p className="mb-5 inline-block rounded-lg bg-green-50 px-3 py-2 font-medium text-green-500">
              {flash.notice}
            </p>
          )}

          <h1 className="text-4xl font-bold">Blog #{blog.id}</h1>

          <Blog blog={blog} />

          <Link
            href={`/blogs/${blog.id}/edit`}
            className="mt-2 inline-block rounded-lg bg-gray-100 px-5 py-3 font-medium"
          >
            Edit this blog
          </Link>
          <Link
            href="/blogs"
            className="ml-2 inline-block rounded-lg bg-gray-100 px-5 py-3 font-medium"
          >
            Back to blogs
          </Link>
          <div className="ml-2 inline-block">
            <Link
              href={`/blogs/${blog.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg bg-gray-100 px-5 py-3 font-medium"
            >
              Destroy this blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
