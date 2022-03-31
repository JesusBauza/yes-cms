<script>
  import { preferences } from '$lib/stores'
  import Viewport from '../Viewport.svelte'
</script>

<Viewport class="bg-yes-gray-100 dark:bg-yes-gray-700" oneWay>
  <div
    class="flex flex-col-reverse py-16 items-center italic content t-p lg:flex-row"
  >
    <p class="w-full anim lg:w-1/2" style="--anim-x: -3rem">
      <strong>Aprendo y Emprendo - Yes Campus</strong>, como organización cuidan
      el equilibrio en la conformación de sus equipos de trabajo y participantes
      en sus actividades, por lo tanto se asegura la participación equitativa
      entre hombres y mujeres en cada una de las fases del programa Young
      Leaders, tanto en la selección de speaker, facilitadores y participantes
      beneficiarios del programa.
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
