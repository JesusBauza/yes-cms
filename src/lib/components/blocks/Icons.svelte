<script lang="ts">
  import type { IconsBlock } from '$lib/models/icons'
  import Image from '../caravaggio/Image.svelte'
  import Viewport from '../Viewport.svelte'

  export let data: IconsBlock
</script>

<div class="content py-16">
  <Viewport
    class="flex flex-col w-full px-6 overflow-hidden shadow-lg sm:flex-row {data.icons.length > 1 ? 'sm:justify-between' : 'sm:justify-center'} anim bg-center"
    style="border-radius: 40px; --anim-r-y: 64deg; background-color: {data.backgroundColor}; background-image: url({data.backgroundImage}); background-size: cover;"
    oneWay
  >
    {#each data.icons as { image, text }, i}
      <div
        class="w-full py-4 text-white md:w-1/4 anim"
        style="transition-delay: {100 * i +
          400}ms; --anim-y: 0.5rem; --anim-r-y: 0deg; --anim-r-x: -64deg"
      >
        <Image
          src={image}
          class="w-full mx-auto mb-4 w-6/10 sm:w-7/10"
          showOriginal=".svg"
          options={{ o: 'webp', q: 90 }}
        />
        {#if text}
          <p class="font-bold text-center drop-shadow-sm filter leading-tight">
            {@html text}
          </p>
        {/if}
      </div>
    {/each}
  </Viewport>
</div>
