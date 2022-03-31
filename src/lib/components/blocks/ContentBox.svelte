<script lang="ts">
  import type { ContentBoxBlock } from '$lib/models/content-box'
  import { pageData } from '$lib/stores'

  export let data: ContentBoxBlock
</script>

<div class="w-full">
  {#if data.title}
    <h2
      class="rounded mb-4 w-full pb-2 t-h2"
      style="color: {$pageData.theme.secondary}; border-color: {$pageData.theme
        .secondary}"
      class:border-b-4={data.underline}
      class:rounded={data.underline}
    >
      {data.title}
    </h2>
  {/if}
  <div class="flex-space-4 t-p body-content" class:mb-8={data.callAction}>
    {@html data.body}
  </div>
  {#if data.callAction}
    <div class="transform duration-200 hover:-translate-y-px">
      <a
        href={data.callActionURL}
        target="__blank"
        class="rounded-full font-bold shadow text-white py-4 px-8 duration-200 hover:shadow-md"
        style:background-color={$pageData.theme.secondary}>{data.callAction}</a
      >
    </div>
  {/if}
</div>

<style>
    .body-content :global(ul) {
        @apply list-disc pl-12;
    }
</style>
