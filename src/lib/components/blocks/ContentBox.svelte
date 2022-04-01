<script lang="ts">
  import type { ContentBoxBlock } from '$lib/models/content-box'
  import { pageData } from '$lib/stores'

  export let data: ContentBoxBlock
</script>

<div class="w-full">
  {#if data.title}
    <h2
      class="rounded font-bold mb-4 w-full pb-2 {data.bigTitle
        ? 'text-5xl leading-tight'
        : 'text-3xl'}"
      style="color: {$pageData.theme.secondary}; border-color: {$pageData.theme
        .secondary}"
      class:border-b-4={data.underline}
      class:rounded={data.underline}
    >
      {#each data.title.split('\n') as str}
        {str}<br />
      {/each}
    </h2>
  {/if}
  <div
    class="flex flex-col space-y-4 t-p body-content"
    class:mb-8={data.callAction}
  >
    {@html data.body}
  </div>
  {#if data.callAction}
    <div class="pt-2">
      <div class="transform duration-200 hover:-translate-y-px">
        <a
          href={data.callActionURL}
          target="__blank"
          class="rounded-full font-bold shadow text-white py-4 px-8 duration-200 hover:shadow-md"
          style:background-color={$pageData.theme.secondary}
          >{data.callAction}</a
        >
      </div>
    </div>
  {/if}
</div>

<style>
  .body-content :global(ul) {
    @apply list-disc -my-2 pl-12;
  }

  .body-content :global(ul) > :global(li){
    @apply py-1;
  }
</style>
