import type { BlockType } from "$lib/utils/blocks"

export type Block<T = any> = {
  type: BlockType
  node?: T
}