/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: { max: '1535px' },
        miniDesktop: { max: '1279px' },
        tablet: { max: '1023px' },
        miniTablet: { max: '767px' },
        phone: { max: '639px' },
        miniPhone: { max: '400px' },
      },

	  colors: {
		primary: "#FFAB08",
		secondary: "#FF7020",
		
	  },
      backgroundColor: {
        primary: '#FFAB08',
        secondary: '#FF7020',
        bg: '#F2F2F3',
        silver: '#F9F9F9',
		modal: '#000000CC'
      },
	  borderColor: {
		silver: '#F2F2F3'
	  },
	  backgroundImage: {
		header: `url("data:image/svg+xml, %3Csvg id='header' width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23FFAB08'/%3E%3C/svg%3E")`
	  },
      gridTemplateColumns: {
        'main-layout':
          '[full-start] minmax(30px, 100px) [center-start] repeat(8,[col-start] minmax(min-content, 150px) [col-end]) [center-end] minmax(30px, 100px) [full-end]',
        'responsive-sm': 'repeat(auto-fit,minmax(200px,1fr))',
        'responsive-md': 'repeat(3,minmax(200px, 430px))',
		'single-product': '276px,344px'
      },
      gridTemplateRows: {
        'admin-main-content': 'repeat(2, minmax(350px, min-content))',
      },
      gridColumn: {
        'admin-sidebar': 'center-start / col-end 1',
        'admin-content': 'col-start 2 / center-end',
        'basket': 'center-start / col-end 2',
		'main-content': 'col-start 3 / center-end',
      },
    },
  },
  fontFamily: {
    sans: ['ui-sans-serif', 'system-ui'],
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-named-lines'),
    require('tailwind-scrollbar'),
  ],
}
