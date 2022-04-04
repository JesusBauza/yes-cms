<script lang="ts">
  import Image from '../caravaggio/Image.svelte'
  import type { ImageBlock as ImageBlockType } from '$lib/models/image'
  export let data: ImageBlockType
</script>

{#if data.smSrc}
  <Image
    src={data.smSrc}
    href={data.href}
    showOriginal=""
    alt={data.alt || ''}
    class="w-full md:hidden sm:w-$w {data.direction
      ? data.direction == 'center'
        ? 'mx-auto'
        : data.direction == 'left'
        ? 'mr-auto'
        : 'ml-auto'
      : 'mx-auto'}"
    style="--w: {data.size || '100%'}; border-radius: {data.borderRadius ||
      0}; filter: {data.shadows
      ? 'drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.25))'
      : 'none'}"
    options={{
      o: 'webp',
      q: 90,
    }}
    title={data.title}
  />
  <Image
    src={data.src}
    href={data.href}
    showOriginal=""
    alt={data.alt || ''}
    class="w-full <md:hidden sm:w-$w {data.direction
      ? data.direction == 'center'
        ? 'mx-auto'
        : data.direction == 'left'
        ? 'mr-auto'
        : 'ml-auto'
      : 'mx-auto'}"
    style="--w: {data.size || '100%'}; border-radius: {data.borderRadius ||
      0}; filter: {data.shadows
      ? 'drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.25))'
      : 'none'}"
    options={{
      o: 'webp',
      q: 90,
    }}
    title={data.title}
  />
{:else}
  <Image
    src={data.src}
    href={data.href}
    showOriginal=""
    alt={data.alt || ''}
    class="w-full sm:w-$w {data.direction
      ? data.direction == 'center'
        ? 'mx-auto'
        : data.direction == 'left'
        ? 'mr-auto'
        : 'ml-auto'
      : 'mx-auto'}"
    style="--w: {data.size || '100%'}; border-radius: {data.borderRadius ||
      0}; filter: {data.shadows
      ? 'drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.25))'
      : 'none'}"
    options={{
      o: 'webp',
      q: 90,
    }}
    title={data.title}
  />
{/if}
