import type { Block } from "./block"

export type PageData = {
  name: string
  theme: {
    primary: string
    secondary: string
  }
  blocks: Block[]
}
