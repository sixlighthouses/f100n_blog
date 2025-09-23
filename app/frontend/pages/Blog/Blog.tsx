import { BlogType } from "./types"

interface BlogProps {
  blog: BlogType
}

export default function Blog({ blog }: BlogProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="mb-1 block font-medium">Title:</strong>
        {blog.title?.toString()}
      </p>
      <p className="my-5">
        <strong className="mb-1 block font-medium">Body:</strong>
        <div dangerouslySetInnerHTML={{ __html: blog.body || "" }} />
      </p>
    </div>
  )
}
