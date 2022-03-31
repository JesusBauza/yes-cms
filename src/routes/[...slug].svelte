<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ fetch }) => {
    const res = await fetch(`/pages/leaders.json`)
    data.set(await res.json())
    return {
      props: {},
    }
  }
</script>

<script>
  import { pageData as data } from '$lib'
  import RenderBlock from '$lib/components/blocks/RenderBlock.svelte'
</script>

<svelte:head>
  <title>{$data.name} | YES Campus</title>
</svelte:head>

<div class="w-full overflow-hidden">
  {#each $data.blocks as block}
    <RenderBlock {block} />
  {/each}
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
