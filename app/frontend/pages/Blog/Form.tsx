import { useForm } from "@inertiajs/react"
import type { FormEvent } from "react"

import type { BlogFormType, BlogType } from "./types"
import "trix" // Import Trix CSS and JS
import "trix/dist/trix.css"

// Temporary fix for InertiaFormProps not being exported from @inertiajs/react
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InertiaFormProps<TForm extends Record<string, any>> = ReturnType<
  typeof useForm<TForm>
>

interface FormProps {
  blog: BlogType
  onSubmit: (form: InertiaFormProps<BlogFormType>) => void
  submitText: string
}

export default function Form({ blog, onSubmit, submitText }: FormProps) {
  const form = useForm<BlogFormType>({
    title: blog.title,
    body: blog.body,
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          className="mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 shadow outline-none"
          onChange={(e) => setData("title", e.target.value)}
        />
        {errors.title && (
          <div className="px-3 py-2 font-medium text-red-500">
            {errors.title}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="body">Body</label>
        <input
          id="trix-editor"
          type="hidden"
          name="body"
          value={data.body}
          onChange={(e) => setData("body", e.target.value)} // Important for Trix to update Inertia form data
        />
        <trix-editor input="trix-editor"></trix-editor>
        {errors.body && (
          <div className="px-3 py-2 font-medium text-red-500">
            {errors.body}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="inline-block cursor-pointer rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
