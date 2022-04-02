<script lang="ts">
  import type { ImagesListBlock } from '$lib/models/image-list'
  import { listsMap } from '$lib/stores'

  import { fly } from 'svelte/transition'
  import Image from '../caravaggio/Image.svelte'

  export let data: ImagesListBlock

  $: console.log($listsMap)

  $: idx = $listsMap[data.id] ?? 0
</script>

<div class="my-6 w-full overflow-hidden wrapper lg:mx-auto lg:w-9/10">
  {#each [data.images[idx]] as img, i (idx)}
    <div
      class="img"
      in:fly|local={{ x: 100 }}
      out:fly|local={{ x: -100, opacity: 0.8 }}
    >
      <Image
        src={img.src}
        alt=""
        options={{
          o: 'webp',
          q: 90,
        }}
        showOriginal=""
        class="w-full"
      />
    </div>
  {/each}
</div>

<style>
  .wrapper {
    overflow: hidden;
    display: grid;
    align-items: start;
    aspect-ratio: 1/1;
  }

  .img {
    grid-column: 1/2;
    grid-row: 1/2 relative;
  }
</style>
