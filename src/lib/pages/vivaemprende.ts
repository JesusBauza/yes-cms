import type { ContentBoxBlock } from '$lib/models/content-box'
import type { GridBlock } from '$lib/models/grid'
import type { IconsBlock } from '$lib/models/icons'
import type { ImagesListBlock } from '$lib/models/image-list'
import type { ListBlock } from '$lib/models/list'

export default {
  name: 'Viva Emprende',
  theme: {
    primary: 'black',
    secondary: '#262B6B',
  },
  blocks: [
    {
      type: 'hero',
      node: {
        logo: '/pages/leaders/title.svg',
        image: '/pages/leaders/hero_image.png',
        callAction: 'Quiero postularme',
        callActionTextColor: 'white',
        backgroundColor: 'rgb(0, 142, 146)',
        backgroundImage: '/pages/leaders/hero_bg.svg',
        description:
          'Bootcamp para el desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes.',
      },
    },
    {
      type: 'title',
      node: {
        title: 'Crezcamos juntos',
      },
    },
    {
      type: 'grid',
      node: {
        smCols: 1,
        elements: [
          {
            animated: true,
            fromX: '-3rem',
            block: {
              type: 'contentBox',
              node: {
                title: 'Impulsamos la\ncapacidad del\nemprendedor\nvenezolano',
                bigTitle: true,
                body: '<p>A través de un programa integral que involucra la selección, formación e incorporación de emprendimientos venezolanos al sistema comercial de <strong>Viva Supercentro</strong>, para así ofrecer oportunidades que conduzcan al fortalecimiento de los emprendedores y su capacidad de negocio de manera sostenida.</p>',
              } as ContentBoxBlock,
            },
          },
          {
            animated: true,
            fromX: '3rem',
            block: {
              type: 'image',
              node: {
                src: '/pages/vivaemprende/viva1.jpg',
                size: '80%',
                direction: 'right',
              },
            },
          },
        ],
      } as GridBlock,
    },
    {
      type: 'title',
      node: {
        title: 'Tu crecimiento es\nimportante para nosotros',
      },
    },
    {
      type: 'grid',
      node: {
        reverseOnLg: true,
        smCols: 1,
        elements: [
          {
            animated: true,
            fromX: '3rem',
            block: {
              type: 'contentBox',
              node: {
                title: 'Este programa es para tí, si',
                body: `<p class="text-2xl"><strong><i>Este programa es para</i></strong></p>`,
              } as ContentBoxBlock,
            },
          },
          {
            animated: true,
            fromX: '-3rem',
            block: {
              type: 'image',
              node: {
                src: '/pages/vivaemprende/viva2.svg',
                size: '80%',
                direction: 'left',
              },
            },
          },
        ],
      } as GridBlock,
    },
    {
      type: 'title',
      node: {
        title: 'Un camino que\nrecorreremos juntos',
      },
    },
    {
      type: 'grid',
      node: {
        smCols: 1,
        lgCols: 1,
        elements: [
          {
            animated: true,
            fromY: '1rem',
            block: {
              type: 'image',
              node: {
                src: '/pages/vivaemprende/fases.svg',
              },
            },
          },
        ],
      },
    },
    {
      type: 'aliados',
      node: {
        aliados: [
          {
            name: 'Aprendo y Emprendo',
            image: 'https://yescampus.io/images/leaders/aliados/aye.webp',
          },
          {
            name: 'YES Campus',
            image: 'https://yescampus.io/images/leaders/aliados/yes.webp',
          },
          {
            name: '1001 Ideas para mi pais',
            image: 'https://yescampus.io/images/leaders/aliados/1001.webp',
          },
          {
            name: 'Ahsoka',
            image: 'https://yescampus.io/images/leaders/aliados/ashoka.webp',
          },
          {
            name: 'Fundación Váyalo',
            image: 'https://yescampus.io/images/leaders/aliados/vayalo.webp',
          },
          {
            name: 'Esperanza Joven',
            image: 'https://yescampus.io/images/leaders/aliados/esperanza.webp',
          },
          {
            name: 'CEVAC',
            image: 'https://yescampus.io/images/yefi/org/cevac.webp',
          },
          {
            name: 'CEVAM',
            image: 'https://yescampus.io/images/yefi/org/cevam.webp',
          },
          {
            name: 'CVA',
            image:
              'https://centrovenezolanoamericano.org/wp-content/uploads/2019/03/logo_cva_def_it_no-75_c1.png',
          },
        ],
      },
    },
    { type: 'disclaimer' },
    {
      type: 'image',
      node: {
        src: '/pages/vivaemprende/banner.svg',
      },
    },
  ],
}
