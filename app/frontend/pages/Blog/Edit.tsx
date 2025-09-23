import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { BlogType } from './types'

interface EditProps {
  blog: BlogType
}

export default function Edit({ blog }: EditProps) {
  return (
    <>
      <Head title="Editing blog" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing blog</h1>

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
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this blog
        </Link>
        <Link
          href="/blogs"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to blogs
        </Link>
      </div>
    </>
  )
}
