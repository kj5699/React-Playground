/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        main:{
          primary: '#494947',
          secondary: '#A2A392',
          red: '#EB5757',
          blue:'#77BEFA',
          white: '#ffffff'
        }
      },
      fontSize: {
        "2xs": ["12px", { lineHeight: "18px" }],
        xs: ["14px", { lineHeight: "20px" }],
        sm: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "24px" }],
        xl: ["20px", { lineHeight: "24px" }],
        "2xl": ["24px", { lineHeight: "28px" }],
        "3xl": ["28px", { lineHeight: "36px" }],
        "4xl": ["32px", { lineHeight: "40px" }],
        "5xl": ["36px", { lineHeight: "48px" }],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
