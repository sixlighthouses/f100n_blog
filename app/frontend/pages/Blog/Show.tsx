import { Head, Link } from '@inertiajs/react'
import Blog from './Blog'
import { BlogType } from './types'

interface ShowProps {
  blog: BlogType
  flash: { notice?: string }
}

export default function Show({ blog, flash }: ShowProps) {
  return (
    <>
      <Head title={`Blog #${blog.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Blog #{blog.id}</h1>

          <Blog blog={blog} />

          <Link
            href={`/blogs/${blog.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this blog
          </Link>
          <Link
            href="/blogs"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to blogs
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/blogs/${blog.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
