import type { ContentBoxBlock } from '$lib/models/content-box'
import type { GridBlock } from '$lib/models/grid'

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
        logo: '/pages/vivaemprende/title.svg',
        image: '/pages/vivaemprende/hero_image.png',
        callAction: 'Quiero postularme',
        callActionTextColor: 'white',
        backgroundColor: 'rgb(0, 142, 146)',
        backgroundImage: '/pages/vivaemprende/hero_bg.svg',
        description:
          'Programa que busca la incorporación de emprendimientos venezolanos en el piso de venta de Viva Supercentro. Esto bajo un esquema de negocios inclusivos con alto impacto social.',
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
                callAction: 'Deseo postularme',
                callActionURL: 'https://tripetto.app/run/8GLV5ZMKFT',
                title: 'Este programa es para tí, si',
                body: `<p class="text-lg"><strong><i>Este programa es para</i></strong></p>
                <ul>
                <li>Emprendimientos constituidos, con al menos dos años de funcionamiento.</li>
                <li>Ubicados en la región Centro-Occidental.</li>
                <li>Capacidad de producción.</li>
                <li>Disposición por aprender y formalizar su negocio.</li>
                </ul>`,
              } as ContentBoxBlock,
            },
          },
          {
            animated: true,
            fromX: '-3rem',
            block: {
              type: 'image',
              node: {
                borderRadius: '40px',
                shadows: true,
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
        titleColor: 'black',
        subtitleColor: 'black',
        aliados: [
          {
            name: 'Viva',
            image: '/pages/vivaemprende/vivalogo.svg',
          },
          {
            name: 'YES Campus',
            image: 'https://yescampus.io/images/leaders/aliados/yes.webp',
          },
        ],
      },
    },
    {
      type: 'image',
      node: {
        src: '/pages/vivaemprende/banner.svg',
        href: 'https://tripetto.app/run/8GLV5ZMKFT',
      },
    },
  ],
}
