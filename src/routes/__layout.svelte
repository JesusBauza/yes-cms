<script lang="ts">
  import 'virtual:windi.css'
  import '$lib/styles/icons.css'
  import '$lib/styles/base.css'
  import '$lib/styles/components.css'

  import Favicons from '$lib/components/Favicons.svelte'
  import Cursor from '$lib/components/Cursor.svelte'
  import Header, { height } from '$lib/components/nav/Header.svelte'
  import { preferences, styles } from '$lib'
  import { browser } from '$app/env'

  $: if (browser)
    document.documentElement.classList.toggle('dark', $preferences.darkMode)

  const fontsURL =
    'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap'

  const fontsTag = `<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="${fontsURL}""
    rel="stylesheet"
    media="print"
    onload="this.onload=null; this.removeAttribute('media');"
  />
  <noscript>
    <link rel="stylesheet" href=${fontsURL} />
  </noscript>`

  $: cssGlobals = {
    navbarHeight: `${$height}px`,
    navbarHeightNegative: `-${$height}px`,
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://caravaggio-cdn.vercel.app" />
  {@html fontsTag}
</svelte:head>

<Favicons favicon="/images/logo.svg" themeColor="#000" titleName="Juan Villacorta" />

<Cursor />
<div
  class="cursor-diff flex flex-col font-title min-h-screen w-full text-yes-gray-500 duration-200 dark:text-yes-gray-300"
  use:styles={cssGlobals}
>
  <div class="z-40">
    <Header />
  </div>
  <main
    class="flex flex-grow h-full duration-100 justify-center"
    style="margin-top: var(--navbarHeight)"
  >
    <slot />
  </main>
  <!-- <Footer /> -->
</div>