<script lang="ts">
  import Image from '../caravaggio/Image.svelte'
  import type { ImageBlock as ImageBlockType } from '$lib/models/image'
  export let data: ImageBlockType
</script>

<Image
  src={data.src}
  showOriginal=""
  alt={data.alt || ''}
  class="w-full sm:w-$w {data.direction
    ? data.direction == 'center'
      ? 'mx-auto'
      : data.direction == 'left'
      ? 'mr-auto'
      : 'ml-auto'
    : 'mx-auto'}"
  style="--w: {data.size || '100%'}"
  options={{
    o: 'webp',
    q: 90,
  }}
  title={data.title}
/>
