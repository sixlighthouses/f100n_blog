import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'

import Blog from './Blog'
import type { BlogType } from './types'

interface IndexProps {
  blogs: BlogType[]
  flash: { notice?: string }
}

export default function Index({ blogs, flash }: IndexProps) {
  return (
    <>
      <Head title="Blogs" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Blogs</h1>
          <Link
            href="/blogs/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
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
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
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
