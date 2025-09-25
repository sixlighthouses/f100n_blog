export interface BlogType {
  id: number
  title: string
  body: string
}

export type BlogFormType = Omit<BlogType, "id">
