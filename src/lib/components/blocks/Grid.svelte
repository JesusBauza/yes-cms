<script lang="ts">
  import type { GridBlock } from '$lib/models/grid'
  import Viewport from '../Viewport.svelte'
  import RenderBlock from './RenderBlock.svelte'

  export let data: GridBlock
</script>

<div class="content">
  <Viewport
    class="grid w-full grid-cols-$cols sm:grid-cols-$sm-cols lg:grid-cols-$lg-cols {data.reverseOnLg
      ? 'reverse'
      : ''} gap-12"
    oneWay
    style="--anim-y: 3rem; --grid-cols: {data.cols ||
      1}; --sm-cols: {data.smCols || 2}; --lg-cols: {data.lgCols || 2}"
  >
    {#each data.elements as { block, fromX, fromY, animated }}
      <div
        class:anim={animated}
        style:--anim-x={fromX || '0'}
        style:--anim-y={fromY || '0'}
        style:direction="ltr"
      >
        <RenderBlock {block} />
      </div>
    {/each}
  </Viewport>
</div>

<style global>
  @screen lg {
    .reverse {
      direction: rtl;
    }
  }
</style>
