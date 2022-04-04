import type { ContentBoxBlock } from '$lib/models/content-box'
import type { GridBlock } from '$lib/models/grid'
import type { IconsBlock } from '$lib/models/icons'
import type { ImagesListBlock } from '$lib/models/image-list'
import type { ListBlock } from '$lib/models/list'

export default {
  name: 'Young Leaders',
  theme: {
    primary: 'rgb(0, 142, 146)',
    secondary: 'rgb(249, 183, 23)',
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
        callActionURL: 'https://tripetto.app/run/5OOTLWDL7L',
        description:
          'Bootcamp para el desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes.',
      },
    },
    {
      type: 'title',
      node: {
        title: 'Creemos y apostamos en jóvenes líderes como tú.',
        subtitle: 'Descubre cómo ser un agente de cambio y de alto impacto.',
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
                title: 'Potencia tu liderazgo',
                underline: true,
                body: '<p>Young Leaders es un programa de desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes emprendedores y estudiantes, mediante la combinación de un programa de formación modular, los cuales se realizan a través de webinars y un workshop que les permite poner en práctica los conocimientos adquiridos para pasar a una segunda fase.</p>',
                callAction: 'Conoce los detalles',
                callActionURL: 'https://tripetto.app/run/5OOTLWDL7L',
              } as ContentBoxBlock,
            },
          },
          {
            animated: true,
            fromX: '3rem',
            block: {
              type: 'image',
              node: {
                src: 'https://yescampus.io/images/leaders/logo.svg',
                size: '60%',
                direction: 'right',
              },
            },
          },
        ],
      } as GridBlock,
    },
    {
      type: 'icons',
      node: {
        backgroundColor: 'rgb(0, 142, 146)',
        backgroundImage: '/pages/leaders/back_yl.svg',
        icons: [
          {
            image: '/pages/leaders/ico_fase_1.svg',
            text: '200 Jóvenes Líderes.<br/>6 Webinars dictados por especialistas.',
          },
          {
            image: '/pages/leaders/ico_fase_2.svg',
            text: '<strong>1 Workshop</strong> <i>"Liderazgo Autoconsciente".</i><br/>Challenge <i>"Ideas para el Cambio"</i>.',
          },
          {
            image: '/pages/leaders/ico_fase_3.svg',
            text: '1 Taller de Fortalecimiento Institucional.<br/>Nueva red de jóvenes agentes de cambio.',
          },
          {
            image: '/pages/leaders/ico_fase_4.svg',
            text: 'Acceso a fondos para 3 micro-proyectos.',
          },
        ],
      } as IconsBlock,
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
                title: 'Perfil',
                underline: true,
                body: `<ul>
                    <li>Jóvenes venezolanos (as).</li>
                    <li>Con edades de entre 17 y 25 años.</li>
                    <li>Con interés en temas como: gobernabilidad, participación ciudadana, activismo social, política, innovación social, derechos humanos, derechos de la mujer, derechos de la comunidad LGBTQ+ y derechos de las personas con discapacidad.</li>
                    <li>Que deseen obtener acceso a fondos para materializar un proyecto piloto, participando en el challenge <strong>#IdeasparaelCambio</strong>.</li>
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
                src: '/pages/leaders/hero_image.png',
              },
            },
          },
        ],
      } as GridBlock,
    },
    {
      type: 'grid',
      node: {
        elements: [
          {
            animated: true,
            fromX: '-3rem',
            block: {
              type: 'list',
              node: {
                id: 'modulos',
                title: '6 módulos formativos',
                elements: [
                  {
                    title: 'Juventud y democracia',
                  },
                  {
                    title:
                      'El poder de una visión y la construcción de cambios sociales',
                  },
                  {
                    title:
                      'Herramientas para el desarrollo de un pensamiento ágil en los líderes',
                  },
                  {
                    title:
                      'Activismo social, participación política y ciudadana a través de medios digitales',
                  },
                  {
                    title:
                      'Caja de herramientas para el trabajo colaborativo y en red',
                  },
                  {
                    title:
                      'Cambio sistémico y participación ciudadana en respuesta a los ODS 2030',
                  },
                ],
              } as ListBlock,
            },
          },
          {
            animated: true,
            fromX: '3rem',
            block: {
              type: 'imagesList',
              node: {
                id: 'modulos',
                images: [
                  {
                    src: '/pages/vivaemprende/modulos/m1.jpg',
                  },
                  {
                    src: '/pages/vivaemprende/modulos/m2.jpg',
                  },
                  {
                    src: '/pages/vivaemprende/modulos/m3.jpg',
                  },
                  {
                    src: '/pages/vivaemprende/modulos/m4.jpg',
                  },
                  {
                    src: '/pages/vivaemprende/modulos/m5.jpg',
                  },
                  {
                    src: '/pages/vivaemprende/modulos/m6.jpg',
                  },
                ],
              } as ImagesListBlock,
            },
          },
        ],
      } as GridBlock,
    },
    {
      type: 'image',
      node: {
        src: '/pages/leaders/banner.jpg',
        smSrc: '/pages/leaders/banner_sm.png',
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
                title: 'Liderazgo Trascendetal',
                underline: true,
                callAction: 'Pustúlate aquí',
                callActionURL: 'https://tripetto.app/run/5OOTLWDL7L',
                body: 'El workshop tiene como objetivo fortalecer las herramientas de trabajo colaborativo y gestión de proyectos en los grupos o proyectos que resulten ganadores del challenge, pudiendo participar un máximo de 3 participantes por iniciativa para un total de 30 participantes.',
              } as ContentBoxBlock,
            },
          },
          {
            animated: true,
            fromX: '3rem',
            block: {
              type: 'list',
              node: {
                title: '6 módulos formativos',
                elements: [
                  {
                    title: 'Agilidad para líderes transformadores',
                  },
                  {
                    title: 'Construcción de un mapa de incidencias y panel de control'
                  },
                  {
                    title: 'Gestión y control de proyectos'
                  },
                  {
                    title: 'Estrategias de sostenibilidad. Autogestión y administración.'
                  },
                  {
                    title: 'Articulación y comunicación de impacto'
                  },
                  {
                    title: 'Formulación de proyectos'
                  },
                ],
              } as ListBlock,
            },
          },
        ],
      } as GridBlock,
    },
    {
      type: 'aliados',
      node: {
        grayscale: true,
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
            name: '',
            image: '/pages/leaders/usa.png',
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
  ],
}
