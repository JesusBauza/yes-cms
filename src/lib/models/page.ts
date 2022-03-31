import type { HeroBlock } from './hero'

export type AliadoBlock = {
  aliados: {
    name?: string
    image?: string
  }[]
}

export type Block<T = any> = {
  type: string
  node: T
}

export type PageData = {
  name: string
  theme: {
    primary: string
    secondary: string
  }
  blocks: Block[]
}
