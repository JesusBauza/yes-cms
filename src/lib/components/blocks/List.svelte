<script lang="ts">
  import type { ListBlock } from '$lib/models/list'
  import { listsMap, pageData } from '$lib/stores'
  import { onDestroy, onMount } from 'svelte'
  import Viewport from '../Viewport.svelte'
  import { browser } from '$app/env'

  export let data: ListBlock
  export let index: number = 0

  const next = () => {
    index = (index + 1) % data.elements?.length || 0
  }

  let interval: NodeJS.Timeout
  const initInterval = () => {
    if (!interval) {
      interval = setInterval(next, 2000)
    }
  }
  const resetInterval = () => {
    clearInterval(interval)
    interval = setInterval(next, 2000)
  }

  onMount(() => {
    if (data.id) {
      $listsMap[data.id] = index
    }
  })

  $: if (data.id && $listsMap) $listsMap[data.id] = index

  onDestroy(() => {
    clearInterval(interval)
    interval = null
    if (data.id) {
      const copy = $listsMap
      delete copy[data.id]
      $listsMap = copy
    }
  })

  $: svgBullet = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   aria-hidden="true"
   viewBox="0 0 32 32"
   focusable="false"
   version="1.1"
   id="svg1021"
   sodipodi:docname="bullet.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <metadata
     id="metadata1027">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs1025" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1366"
     inkscape:window-height="711"
     id="namedview1023"
     showgrid="false"
     inkscape:zoom="22.627417"
     inkscape:cx="21.988501"
     inkscape:cy="15.19604"
     inkscape:window-x="0"
     inkscape:window-y="31"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg1021" />
  <path
     d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"
     fill="#c00"
     id="path1017"
     style="fill:${$pageData.theme.primary};fill-opacity:1" />
  <circle
     fill="#c00"
     cx="16"
     cy="16"
     r="6"
     id="circle1019"
     style="fill:${$pageData.theme.primary};fill-opacity:1" />
  <path
     style="fill:${$pageData.theme.primary};fill-opacity:0;stroke-width:0.05992509"
     d="m 15.029213,27.935072 c -0.0824,-0.0119 -0.392509,-0.05159 -0.689138,-0.0882 C 12.926173,27.672391 11.278889,27.100414 9.9734502,26.330676 7.3142728,24.762722 5.3024749,22.164729 4.4804041,19.237073 2.9234186,13.692153 5.5564158,7.8175223 10.744569,5.2607359 15.309485,3.0110888 20.78666,3.912389 24.40486,7.5086142 c 3.669848,3.6475598 4.607027,9.1411718 2.341041,13.7228468 -2.064918,4.175125 -6.276608,6.78636 -10.860393,6.733412 -0.388565,-0.0045 -0.773898,-0.0179 -0.856295,-0.0298 z m 2.456929,-6.1107 c 1.046397,-0.263921 1.977483,-0.796561 2.759575,-1.578655 0.786003,-0.786002 1.310046,-1.709093 1.593642,-2.807167 0.190004,-0.735686 0.213574,-1.926168 0.05304,-2.678999 -0.471007,-2.208835 -2.162241,-3.981108 -4.386569,-4.596761 -0.394366,-0.109153 -0.631476,-0.130166 -1.487854,-0.131857 -1.059979,-0.0021 -1.333107,0.04057 -2.127341,0.332293 -1.560508,0.573177 -2.952414,1.955115 -3.51838,3.493178 -0.329045,0.894212 -0.4609018,2.135586 -0.321894,3.030487 0.415788,2.676735 2.522376,4.732428 5.218551,5.09247 0.581865,0.0777 1.567947,0.0088 2.217228,-0.154989 z"
     id="path1031"
     inkscape:connector-curvature="0" />
  <path
     style="fill:${$pageData.theme.primary};fill-opacity:0;stroke-width:0.05992509"
     d="M 14.759551,31.92659 C 10.884825,31.581087 7.4597423,29.9937 4.7480493,27.286664 3.4897444,26.03052 2.5714172,24.770035 1.7772556,23.208989 1.0027833,21.686644 0.51059654,20.196316 0.22370157,18.504869 0.06184038,17.550583 6.9773184e-4,15.484518 0.10378978,14.452941 0.80008995,7.4855041 6.0238532,1.7149594 12.87191,0.34835709 c 1.281493,-0.25573558 2.100553,-0.32049327 3.588521,-0.28372084 1.450692,0.03585121 2.269533,0.14881143 3.593253,0.49569371 2.079187,0.54485284 4.214063,1.62394304 5.941822,3.00334044 0.66066,0.5274539 1.904052,1.7691121 2.420229,2.4168539 2.768248,3.473829 3.973681,7.7460767 3.415442,12.1048687 -0.905539,7.070543 -6.65821,12.819842 -13.757323,13.749257 -0.885171,0.115887 -2.533082,0.1616 -3.314303,0.09194 z m 3.056179,-4.042182 c 1.945928,-0.300697 3.794716,-1.083579 5.411399,-2.291491 0.572799,-0.42797 1.58799,-1.403161 2.059501,-1.978353 C 29.21898,18.81752 28.868977,11.88936 24.472795,7.5050259 22.586893,5.6242072 20.285744,4.4740652 17.64642,4.093121 16.792203,3.9698284 15.173417,3.9708116 14.327805,4.0951365 10.348198,4.6802326 6.9699613,7.1421046 5.2033015,10.744569 c -0.8358408,1.704396 -1.2003052,3.296532 -1.2003052,5.243446 0,1.994955 0.3961523,3.686569 1.2635338,5.395427 1.8656671,3.675614 5.4141329,6.129597 9.5229829,6.585728 0.677924,0.07526 2.281291,0.03035 3.026217,-0.08476 z"
     id="path1033"
     inkscape:connector-curvature="0" />
  <path
     style="fill:${$pageData.theme.primary};fill-opacity:0;stroke-width:0.05992509"
     d="m 15.184105,21.91421 c -2.390346,-0.348632 -4.270314,-2.017634 -4.96186,-4.405055 -0.119307,-0.411882 -0.136852,-0.606893 -0.136852,-1.52114 0,-0.917713 0.01729,-1.108428 0.13846,-1.527002 0.300331,-1.037504 0.823548,-1.931006 1.564851,-2.672309 0.741303,-0.741303 1.634805,-1.26452 2.672309,-1.564851 0.418574,-0.121167 0.609289,-0.13846 1.527002,-0.13846 1.148483,0 1.509872,0.06786 2.416941,0.453855 0.964649,0.410495 1.990471,1.287871 2.601887,2.225371 1.529828,2.345724 1.198996,5.460434 -0.791397,7.450827 -1.316915,1.316915 -3.227201,1.961898 -5.031341,1.698764 z"
     id="path1035"
     inkscape:connector-curvature="0" />
  <path
     style="fill:#ffffff;fill-opacity:1;stroke-width:0.01670331;stroke-miterlimit:4;stroke-dasharray:none"
     d="M 15.085371,27.989534 C 13.638048,27.876978 12.126824,27.466958 10.820633,26.832441 9.5786259,26.229103 8.6309844,25.571213 7.6803972,24.652364 5.7149986,22.752585 4.541194,20.477672 4.0937002,17.701102 c -0.1119454,-0.694589 -0.1119454,-2.708362 0,-3.402951 C 4.541194,11.521581 5.7149986,9.2466679 7.6803972,7.3468894 9.8228593,5.2759592 12.596134,4.1008541 15.593604,3.9938676 20.099898,3.8330279 24.286672,6.207768 26.51984,10.191234 c 0.735211,1.311449 1.233437,2.864298 1.431125,4.46047 0.07051,0.569308 0.07051,2.126537 0,2.695845 -0.419947,3.390726 -2.120945,6.316205 -4.847462,8.336957 -1.762653,1.306386 -3.851757,2.094174 -6.073588,2.290314 -0.475669,0.04199 -1.494647,0.0497 -1.944544,0.01471 z m 2.12132,-6.133974 c 1.099494,-0.243082 2.062774,-0.749984 2.870946,-1.510763 0.893763,-0.841351 1.47288,-1.854325 1.757809,-3.074705 0.101918,-0.436524 0.116053,-0.591269 0.116053,-1.270466 0,-0.679196 -0.01413,-0.833941 -0.116053,-1.270465 -0.548389,-2.348809 -2.318782,-4.088986 -4.672949,-4.593195 -0.530884,-0.113703 -1.81259,-0.11209 -2.342291,0.0029 -1.320311,0.28674 -2.54926,1.017829 -3.372429,2.006224 -0.948341,1.138692 -1.40712,2.395412 -1.40712,3.854488 0,2.920468 2.064358,5.366571 4.978423,5.899042 0.466013,0.08515 1.719165,0.06046 2.187611,-0.04311 z"
     id="path1109"
     inkscape:connector-curvature="0" />
</svg>`

  $: svgDarkBullet = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   aria-hidden="true"
   viewBox="0 0 32 32"
   focusable="false"
   version="1.1"
   id="svg1021"
   sodipodi:docname="bullet-dark.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <metadata
     id="metadata1027">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs1025" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1366"
     inkscape:window-height="711"
     id="namedview1023"
     showgrid="false"
     inkscape:zoom="22.627417"
     inkscape:cx="21.988501"
     inkscape:cy="15.19604"
     inkscape:window-x="0"
     inkscape:window-y="31"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg1021" />
  <path
     d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"
     fill="#c00"
     id="path1017"
     style="fill:${$pageData.theme.primary};fill-opacity:1" />
  <circle
     fill="#c00"
     cx="16"
     cy="16"
     r="6"
     id="circle1019"
     style="fill:${$pageData.theme.primary};fill-opacity:1" />
  <path
     style="fill:${$pageData.theme.primary};fill-opacity:0;stroke-width:0.05992509"
     d="m 15.029213,27.935072 c -0.0824,-0.0119 -0.392509,-0.05159 -0.689138,-0.0882 C 12.926173,27.672391 11.278889,27.100414 9.9734502,26.330676 7.3142728,24.762722 5.3024749,22.164729 4.4804041,19.237073 2.9234186,13.692153 5.5564158,7.8175223 10.744569,5.2607359 15.309485,3.0110888 20.78666,3.912389 24.40486,7.5086142 c 3.669848,3.6475598 4.607027,9.1411718 2.341041,13.7228468 -2.064918,4.175125 -6.276608,6.78636 -10.860393,6.733412 -0.388565,-0.0045 -0.773898,-0.0179 -0.856295,-0.0298 z m 2.456929,-6.1107 c 1.046397,-0.263921 1.977483,-0.796561 2.759575,-1.578655 0.786003,-0.786002 1.310046,-1.709093 1.593642,-2.807167 0.190004,-0.735686 0.213574,-1.926168 0.05304,-2.678999 -0.471007,-2.208835 -2.162241,-3.981108 -4.386569,-4.596761 -0.394366,-0.109153 -0.631476,-0.130166 -1.487854,-0.131857 -1.059979,-0.0021 -1.333107,0.04057 -2.127341,0.332293 -1.560508,0.573177 -2.952414,1.955115 -3.51838,3.493178 -0.329045,0.894212 -0.4609018,2.135586 -0.321894,3.030487 0.415788,2.676735 2.522376,4.732428 5.218551,5.09247 0.581865,0.0777 1.567947,0.0088 2.217228,-0.154989 z"
     id="path1031"
     inkscape:connector-curvature="0" />
  <path
     style="fill:${$pageData.theme.primary};fill-opacity:0;stroke-width:0.05992509"
     d="M 14.759551,31.92659 C 10.884825,31.581087 7.4597423,29.9937 4.7480493,27.286664 3.4897444,26.03052 2.5714172,24.770035 1.7772556,23.208989 1.0027833,21.686644 0.51059654,20.196316 0.22370157,18.504869 0.06184038,17.550583 6.9773184e-4,15.484518 0.10378978,14.452941 0.80008995,7.4855041 6.0238532,1.7149594 12.87191,0.34835709 c 1.281493,-0.25573558 2.100553,-0.32049327 3.588521,-0.28372084 1.450692,0.03585121 2.269533,0.14881143 3.593253,0.49569371 2.079187,0.54485284 4.214063,1.62394304 5.941822,3.00334044 0.66066,0.5274539 1.904052,1.7691121 2.420229,2.4168539 2.768248,3.473829 3.973681,7.7460767 3.415442,12.1048687 -0.905539,7.070543 -6.65821,12.819842 -13.757323,13.749257 -0.885171,0.115887 -2.533082,0.1616 -3.314303,0.09194 z m 3.056179,-4.042182 c 1.945928,-0.300697 3.794716,-1.083579 5.411399,-2.291491 0.572799,-0.42797 1.58799,-1.403161 2.059501,-1.978353 C 29.21898,18.81752 28.868977,11.88936 24.472795,7.5050259 22.586893,5.6242072 20.285744,4.4740652 17.64642,4.093121 16.792203,3.9698284 15.173417,3.9708116 14.327805,4.0951365 10.348198,4.6802326 6.9699613,7.1421046 5.2033015,10.744569 c -0.8358408,1.704396 -1.2003052,3.296532 -1.2003052,5.243446 0,1.994955 0.3961523,3.686569 1.2635338,5.395427 1.8656671,3.675614 5.4141329,6.129597 9.5229829,6.585728 0.677924,0.07526 2.281291,0.03035 3.026217,-0.08476 z"
     id="path1033"
     inkscape:connector-curvature="0" />
  <path
     style="fill:${$pageData.theme.primary};fill-opacity:0;stroke-width:0.05992509"
     d="m 15.184105,21.91421 c -2.390346,-0.348632 -4.270314,-2.017634 -4.96186,-4.405055 -0.119307,-0.411882 -0.136852,-0.606893 -0.136852,-1.52114 0,-0.917713 0.01729,-1.108428 0.13846,-1.527002 0.300331,-1.037504 0.823548,-1.931006 1.564851,-2.672309 0.741303,-0.741303 1.634805,-1.26452 2.672309,-1.564851 0.418574,-0.121167 0.609289,-0.13846 1.527002,-0.13846 1.148483,0 1.509872,0.06786 2.416941,0.453855 0.964649,0.410495 1.990471,1.287871 2.601887,2.225371 1.529828,2.345724 1.198996,5.460434 -0.791397,7.450827 -1.316915,1.316915 -3.227201,1.961898 -5.031341,1.698764 z"
     id="path1035"
     inkscape:connector-curvature="0" />
  <path
     style="fill:#1e1e1e;fill-opacity:1;stroke-width:0.01670331;stroke-miterlimit:4;stroke-dasharray:none"
     d="M 15.085371,27.989534 C 13.638048,27.876978 12.126824,27.466958 10.820633,26.832441 9.5786259,26.229103 8.6309844,25.571213 7.6803972,24.652364 5.7149986,22.752585 4.541194,20.477672 4.0937002,17.701102 c -0.1119454,-0.694589 -0.1119454,-2.708362 0,-3.402951 C 4.541194,11.521581 5.7149986,9.2466679 7.6803972,7.3468894 9.8228593,5.2759592 12.596134,4.1008541 15.593604,3.9938676 20.099898,3.8330279 24.286672,6.207768 26.51984,10.191234 c 0.735211,1.311449 1.233437,2.864298 1.431125,4.46047 0.07051,0.569308 0.07051,2.126537 0,2.695845 -0.419947,3.390726 -2.120945,6.316205 -4.847462,8.336957 -1.762653,1.306386 -3.851757,2.094174 -6.073588,2.290314 -0.475669,0.04199 -1.494647,0.0497 -1.944544,0.01471 z m 2.12132,-6.133974 c 1.099494,-0.243082 2.062774,-0.749984 2.870946,-1.510763 0.893763,-0.841351 1.47288,-1.854325 1.757809,-3.074705 0.101918,-0.436524 0.116053,-0.591269 0.116053,-1.270466 0,-0.679196 -0.01413,-0.833941 -0.116053,-1.270465 -0.548389,-2.348809 -2.318782,-4.088986 -4.672949,-4.593195 -0.530884,-0.113703 -1.81259,-0.11209 -2.342291,0.0029 -1.320311,0.28674 -2.54926,1.017829 -3.372429,2.006224 -0.948341,1.138692 -1.40712,2.395412 -1.40712,3.854488 0,2.920468 2.064358,5.366571 4.978423,5.899042 0.466013,0.08515 1.719165,0.06046 2.187611,-0.04311 z"
     id="path1109"
     inkscape:connector-curvature="0" />
</svg>`

  const encodeSvg = (svg: string) => (browser ? window.btoa(svg) : '')
</script>

<div class="w-full" style="--text-color: {$pageData.theme.primary};">
  <div class="flex mb-8 items-center">
    <div
      class="bg-yes-gray-500 mr-4 w-24 dark:bg-gray-300"
      style="height: 1px"
    />
    <h2 class="font-light t-p" style="line-height: 0">{data.title}</h2>
  </div>
  <Viewport
    oneWay
    on:intersect={() => initInterval()}
    on:top={() => {
      if (interval) {
        resetInterval()
        index = 0
      }
    }}
  >
    <ul>
      {#each data.elements as el, i}
        <li
          class:active={index == i}
          on:click={() => {
            resetInterval()
            index = i
          }}
          class="cursor-pointer"
          style="--bullet-svg: url('data:image/svg+xml;base64,{encodeSvg(
            svgBullet
          )}'); --bullet-dark-svg: url('data:image/svg+xml;base64,{encodeSvg(
            svgDarkBullet
          )}')"
        >
          <div class="flex flex-col pointer-events-none">
            <h2 class="duration-200 t-h3" class:text-$text-color={index == i}>
              {i + 1}. {el.title}
            </h2>
            {#if el.subtitle}
              <p
                class="font-light transform duration-200 t-p"
                class:-translate-x-4={index != i}
                class:opacity-0={index != i}
              >
                {el.subtitle}
              </p>
            {/if}
          </div>
        </li>
      {/each}
    </ul>
  </Viewport>
</div>

<style>
  ul {
    list-style-type: none;
  }

  li {
    /* You need to turn on relative positioning so the line is placed relative to the item rather than absolutely on the page */
    position: relative;

    /* Use padding to space things out rather than margins as the line would get broken up otherwise */
    margin: 0;
    padding-bottom: 1em;
    padding-left: 25px;
  }

  li:hover h2 {
    color: var(--text-color);
  }

  /* The actual line being placed before each list item, tweak width and color as appropriate */
  li:before {
    background-color: var(--text-color);
    @apply bg-yes-gray-500;
    width: 2px;
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 5px;
  }

  :global(.dark) li:before {
    @apply bg-yes-gray-300;
  }

  /* Small bullets for normal list items */
  li::after {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23605F5F' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    left: 0;
    top: 2px;
    width: 12px;
    height: 12px;
  }

  :global(.dark) li::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23BFBFBF' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
  }

  /* Large bullet for the first list item */
  li.active::after {
    content: '';
    width: 16px;
    height: 16px;
    left: -2px;
    top: 0;
    background-image: var(--bullet-svg);
  }

  :global(.dark) li.active::after {
    background-image: var(--bullet-dark-svg);
  }

  /* Start the line further down on the first list item */
  li:first-child:before {
    top: 6px;
  }

  /* Stop the line short on the final list item */
  li:last-child:before {
    height: 6px;
  }
</style>
