<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ fetch }) => {
    const res = await fetch(`/pages/leaders.json`)
    data.set(await res.json())
    return {
      props: {},
    }
  }
</script>

<script>
  import { pageData as data, preferences } from '$lib'

  import Hero from '$lib/components/blocks/Hero.svelte'
  import Viewport from '$lib/components/Viewport.svelte'

  const block = {
    hero: Hero,
  }
</script>

<svelte:head>
  <title>{$data.name} | YES Campus</title>
</svelte:head>

<div class="w-full overflow-hidden">
  {#each $data.blocks as b}
    {#if block[b.type]}
      <svelte:component this={block[b.type]} data={b.node} />
    {/if}
  {/each}

  <Viewport class="bg-yes-gray-100 dark:bg-yes-gray-700" oneWay>
    <div
      class="flex flex-col-reverse py-16 items-center italic content t-p lg:flex-row"
    >
      <p class="w-full anim lg:w-1/2" style="--anim-x: -3rem">
        <strong>Aprendo y Emprendo - Yes Campus</strong>, como organización
        cuidan el equilibrio en la conformación de sus equipos de trabajo y
        participantes en sus actividades, por lo tanto se asegura la
        participación equitativa entre hombres y mujeres en cada una de las
        fases del programa Young Leaders, tanto en la selección de speaker,
        facilitadores y participantes beneficiarios del programa.
      </p>
      <div
        class="flex w-full pb-16 anim justify-center lg:pb-0 lg:pl-16 lg:w-1/2"
        style="--anim-x: 3rem"
      >
        <img
          src="/images/logo{$preferences.darkMode ? '-white' : ''}.svg"
          alt=""
          class="w-72"
        />
      </div>
    </div>
  </Viewport>
</div>

<style global>
  .grayscale {
    --filter-gray: 100%;
    filter: grayscale(var(--filter-gray)) drop-shadow(1px 1px 0 white)
      drop-shadow(-1px 1px 0 white) drop-shadow(1px -1px 0 white)
      drop-shadow(-1px -1px 0 white);
  }

  .grayscale:hover {
    --filter-gray: 0%;
  }
</style>
