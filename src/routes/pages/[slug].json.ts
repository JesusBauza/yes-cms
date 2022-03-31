import type { PageData } from '$lib/models/page'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<{}, PageData> = async () => {
  return {
    body: {
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
            backgroundColor: 'rgb(0, 142, 146)',
            callActionBgColor: 'rgb(249, 183, 23)',
            callActionTextColor: 'white',
            backgroundImage: '/pages/leaders/hero_bg.svg',
            description:
              'Bootcamp para el desarrollo de competencias de liderazgo juvenil en función de la defensa de la democracia y el fortalecimiento institucional de las organizaciones lideradas por jóvenes.',
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
                image:
                  'https://yescampus.io/images/leaders/aliados/ashoka.webp',
              },
              {
                name: 'Fundación Váyalo',
                image:
                  'https://yescampus.io/images/leaders/aliados/vayalo.webp',
              },
              {
                name: 'Esperanza Joven',
                image:
                  'https://yescampus.io/images/leaders/aliados/esperanza.webp',
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
      ],
    },
  }
}
