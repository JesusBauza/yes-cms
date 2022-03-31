import type { Block } from "./block"

export type GridBlock = {
  lgCols?: number
  smCols?: number
  cols?: number
  reverseOnLg?: boolean
  elements: GridElementBlock[]
}

export type GridElementBlock = {
  animated?: boolean
  fromX?: string
  fromY?: string
  block: Block
}
