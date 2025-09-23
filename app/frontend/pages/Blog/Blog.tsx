import { BlogType } from './types'

interface BlogProps {
  blog: BlogType
}

export default function Blog({ blog }: BlogProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Title:</strong>
        {blog.title?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Body:</strong>
        {blog.body?.toString()}
      </p>
    </div>
  )
}
