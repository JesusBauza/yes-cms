<script lang="ts">
  import type { TitleBlock } from '$lib/models/title'
  import { pageData } from '$lib/stores'

  export let data: TitleBlock
</script>

<div class="py-16 content">
  <h2 class="text-center t-h1" style:color={$pageData.theme.secondary} class:mb-4={data.subtitle}>
    {data.title}
  </h2>
  {#if data.subtitle}
    <p
      class="text-center t-h3 text-leaders-sky"
      style:color={$pageData.theme.primary}
    >
      {data.subtitle}
    </p>
  {/if}
</div>
