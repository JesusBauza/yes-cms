<script lang="ts">
  import type { HeroBlock } from '$lib/models/hero'
  import { pageData } from '$lib/stores'

  import Image from '../caravaggio/Image.svelte'

  import Viewport from '../Viewport.svelte'

  const defaultData: HeroBlock = {
    logo: 'https://yescampus.io/images/leaders/titulo.svg',
    image: 'https://yescampus.io/images/leaders/bg1.webp',
    callAction: 'Quiero postularme',
    backgroundColor: 'rgb(0, 142, 146)',
    callActionTextColor: 'white',
    backgroundImage: 'https://yescampus.io/images/yefi/bg.svg',
    description:
      'Bootcamp para el desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes.',
  }

  export let data: HeroBlock

  const get = <K extends keyof HeroBlock>(key: K): HeroBlock[K] =>
    data[key] || defaultData[key]
</script>

<Viewport
  class="bg-cover w-full relative overflow-hidden"
  style="background-color: {get('backgroundColor')}; background-image: url({get(
    'backgroundImage'
  )})"
>
  <div
    class="right-0 bottom-0 w-4/10 anim absolute hidden lg:block"
    style="--anim-y: 40%"
  >
    
  
    
  </div>
  <div class="flex flex-wrap text-white py-16 pb-0 content lg:py-12">
    <div class="w-full anim lg:w-1/2" style="--anim-x: -3rem">
      <Image
        src={get('logo')}
        showOriginal=".svg"
        options={{
          q: 90,
          o: 'webp',
        }}
        class="mb-6 w-full w-8/10"
      />
      <p class="mb-8 t-p">{get('description')}</p>
      <div class="transform duration-200 hover:-translate-y-px">
        <a
          class="rounded-full font-bold shadow text-white py-4 px-8 duration-200 hover:shadow-md"
          style="background: {$pageData.theme.secondary};"
          href={get('callActionURL')}
          target="__blank"
          >{get('callAction')}</a
        >
      </div>
    </div>
  </div>
  <Image
    src={get('image')}
    showOriginal=".svg"
    options={{
      q: 90,
      o: 'webp',
    }}
    class="w-full py-16 anim lg:hidden"
  />
</Viewport>
