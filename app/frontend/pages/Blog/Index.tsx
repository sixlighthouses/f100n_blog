import { Head, Link } from "@inertiajs/react"
import { Fragment } from "react"

import Blog from "./Blog"
import type { BlogType } from "./types"

interface IndexProps {
  blogs: BlogType[]
  flash: { notice?: string }
}

export default function Index({ blogs, flash }: IndexProps) {
  return (
    <>
      <Head title="Blogs" />
      <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
        {flash.notice && (
          <p className="mb-5 inline-block rounded-lg bg-green-50 px-3 py-2 font-medium text-green-500">
            {flash.notice}
          </p>
        )}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Blogs</h1>
          <Link
            href="/blogs/new"
            className="block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
          >
            New blog
          </Link>
        </div>

        <div className="min-w-full">
          {blogs.map((blog) => (
            <Fragment key={blog.id}>
              <Blog blog={blog} />
              <p>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="ml-2 inline-block rounded-lg bg-gray-100 px-5 py-3 font-medium"
                >
                  Show this blog
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
