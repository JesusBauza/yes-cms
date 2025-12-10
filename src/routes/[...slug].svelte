<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import type { PageData } from '$lib/models/page'
  export const load: Load<{ slug: string }> = async ({ fetch, params }) => {
    const res = await fetch(`/pages/${params.slug}.json`)
    if (!res.ok) {
      return {
        redirect: `https://yescampus.co/${params.slug}`,
        status: 302,
      }
    }
    const pageData: PageData = await res.json()
    data.set(pageData)
    return {
      props: {
        blocks: pageData.blocks,
        slug: params.slug,
      },
    }
  }
</script>

<script lang="ts">
  import type { Block } from '$lib/models/block'
  import { pageData as data } from '$lib'
  import RenderBlock from '$lib/components/blocks/RenderBlock.svelte'

  export let blocks: Block[]
  export let slug: string
</script>

<svelte:head>
  <title>{$data.name} | YES Campus</title>
</svelte:head>

<div class="w-full overflow-hidden">
  {#key slug}
    {#each blocks as block}
      <RenderBlock {block} />
    {/each}
  {/key}
</div>

<style global>
  .grayscale {
    --filter-gray: 100%;
    filter: grayscale(var(--filter-gray)) drop-shadow(1px 1px 0 white)
      drop-shadow(-1px 1px 0 white) drop-shadow(1px -1px 0 white)
      drop-shadow(-1px -1px 0 white);
  }

  .grayscale:hover {
    --filter-gray: 0%;
  }
</style>
