<script lang="ts">
  import type { Block } from '$lib/models/block'
  import { renderBlock } from '$lib/utils/blocks'

  export let block: Block

  $: console.log(block)
</script>

{#if renderBlock(block.type)}
  <svelte:component this={renderBlock(block.type)} data={block.node} />
{/if}
