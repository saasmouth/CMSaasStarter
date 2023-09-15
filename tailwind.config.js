/** @type {import('tailwindcss').Config} */

let cream = '#F5F2EB'
let rc2 = '#DF612F'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cream: cream,
        rc1: '#EBA239',
        rc2: rc2,
        rc3: '#D73A28',
        rc4: '#9F2F42',
        rc5: '#60233E',
      },
      screens: {
        'stdphone': '390px',
      },
    },
    fontFamily: {
      sans: 'Avenir, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      logo: "'Avenir Black','Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        cmtheme: {
          "primary": rc2,
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": cream,
        },
      },
    ],
  }
}

