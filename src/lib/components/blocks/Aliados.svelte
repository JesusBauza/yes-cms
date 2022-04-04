<script lang="ts">
  import type { AliadoBlock } from '$lib/models/aliado'

  import { pageData } from '$lib/stores'

  import Image from '../caravaggio/Image.svelte'
  import { hoverable } from '../Cursor.svelte'
  import Viewport from '../Viewport.svelte'

  export let data: AliadoBlock
</script>

<div class="mt-12 w-full" id="aliados">
  <div class="py-12 content">
    <Viewport class="overflow-hidden" oneWay>
      <h2
        class="text-center mb-2 leading-3 anim t-h2"
        style="--anim-r: 3deg; --anim-y: 100%; color: {data.titleColor ||
          'unset'}"
      >
        Organizaciones que hacen posible el Bootcamp
      </h2>
      <p
        class="font-bold text-center text-lg pb-2 anim lg:text-2xl"
        style="transition-delay: 200ms; --anim-r: 3deg; --anim-y: 100%; color: {data.subtitleColor ||
          $pageData.theme.primary}"
      >
        {$pageData.name} es posible gracias a
      </p>
    </Viewport>
    <Viewport class="flex flex-wrap min-h-50vh items-center" oneWay>
      {#each data.aliados as c, i}
        <div
          class="flex mx-auto mt-2 p-6 w-1/2 anim lg:w-1/4"
          style="transition-delay: {50 * i + 500}ms"
        >
          <Image
            src={c.image}
            showOriginal=".svg"
            options={{
              q: 90,
              o: 'webp',
            }}
            alt={c.name}
            class="m-auto w-auto transform duration-200 hover:scale-110 {data.grayscale
              ? 'grayscale'
              : ''}"
            style="max-height: 6rem"
          />
        </div>
      {/each}
    </Viewport>
  </div>
</div>
