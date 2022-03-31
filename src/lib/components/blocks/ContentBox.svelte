<script lang="ts">
  import type { ContentBoxBlock } from '$lib/models/content-box'
  import { pageData } from '$lib/stores'

  export let data: ContentBoxBlock
</script>

<div class="w-full">
  {#if data.title}
    <h2
      class="w-full pb-2 mb-4 rounded t-h2"
      style="color: {$pageData.theme.secondary}; border-color: {$pageData.theme
        .secondary}"
      class:border-b-4={data.underline}
      class:rounded={data.underline}
    >
      {data.title}
    </h2>
  {/if}
  <div class="t-p flex-space-4" class:mb-8={data.callAction}>
    {@html data.body}
  </div>
  {#if data.callAction}
    <div class="transform hover:-translate-y-px duration-200">
      <a
        href={data.callActionURL}
        target="__blank"
        class="px-8 py-4 font-bold text-white rounded-full shadow duration-200 hover:shadow-md"
        style:background-color={$pageData.theme.secondary}>{data.callAction}</a
      >
    </div>
  {/if}
</div>
