<script lang="ts">
  import type { TitleBlock } from '$lib/models/title'
  import { pageData } from '$lib/stores'

  export let data: TitleBlock
</script>

<div class="py-16 content">
  <h2
    class="font-bold text-center text-3xl lg:text-4xl"
    style:color={$pageData.theme.secondary}
    class:mb-4={data.subtitle}
  >
    {#each data.title.split('\n') as str}
      {str}<br />
    {/each}
  </h2>
  {#if data.subtitle}
    <p
      class="text-center text-leaders-sky t-h3"
      style:color={$pageData.theme.primary}
    >
      {#each data.subtitle.split('\n') as str}
        {str}<br />
      {/each}
    </p>
  {/if}
</div>
