import Aliados from '$lib/components/blocks/Aliados.svelte'
import ContentBox from '$lib/components/blocks/ContentBox.svelte'
import Disclaimer from '$lib/components/blocks/Disclaimer.svelte'
import Grid from '$lib/components/blocks/Grid.svelte'
import Hero from '$lib/components/blocks/Hero.svelte'
import Icons from '$lib/components/blocks/Icons.svelte'
import ImageBlock from '$lib/components/blocks/ImageBlock.svelte'
import Title from '$lib/components/blocks/Title.svelte'
import List from '$lib/components/blocks/List.svelte'

const blocks = {
  hero: Hero,
  aliados: Aliados,
  grid: Grid,
  disclaimer: Disclaimer,
  icons: Icons,
  title: Title,
  contentBox: ContentBox,
  image: ImageBlock,
  list: List,
}

export type BlockType = keyof typeof blocks

export const renderBlock = (type: BlockType) => blocks[type]
