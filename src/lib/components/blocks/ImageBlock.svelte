<script lang="ts">
  import Image from '../caravaggio/Image.svelte'
  import type { ImageBlock as ImageBlockType } from '$lib/models/image'
  export let data: ImageBlockType
</script>

<Image
  src={data.src}
  showOriginal=".svg"
  alt={data.alt || ''}
  class="mx-auto"
  style="width: {data.size || '100%'}"
  options={{
    o: 'webp',
    q: 90,
  }}
  title={data.title}
/>
