import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { BlogType } from './types'

interface NewProps {
  blog: BlogType
}

export default function New({ blog }: NewProps) {
  return (
    <>
      <Head title="New blog" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New blog</h1>

        <Form
          blog={blog}
          onSubmit={(form) => {
            form.transform((data) => ({ blog: data }))
            form.post('/blogs')
          }}
          submitText="Create Blog"
        />

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
