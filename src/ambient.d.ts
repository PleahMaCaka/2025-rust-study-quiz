interface QuizMetadata {
  id: number
  author: string
  answer_type: "text" | "choice"
  answer_choices?: string[]
  answer?: string
}

declare module "*.svx" {
  import type { ComponentType } from "svelte"
  const component: ComponentType
  export default component
  export const metadata: QuizMetadata
}
