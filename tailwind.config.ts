import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		"./src/**/*.{html,js}",
	],
	darkMode: ['class'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
					'logo': "url('/assets/SVG/LogosSlider.svg')",
			},
			screens: {
				smartphone_200px: '200px',
				smartphone_380px: '380px',
				smartphone_400px: '400px',
				smartphone_500px: '500px',
			},
			colors: {
				portfolio: {
					antiFlashWhite: '#EBEBEB',
					black: '#1d1d1d',
					white: '#FFFFFF',
					grayBg: '#1c1d25',
					orange: '#F59115',
					amarronado: '#46332E',
				},
				scale: {
					'200': '2',
				},
			},
			utilities: {
				'preserve-3d': {
				  'transform-style': 'preserve-3d',
				},
			  },
			keyframes: {
				slide: {
					'0%': { transform: 'translateY(100%)', opacity: '0.1' },
					'15%': { transform: 'translateY(0)', opacity: '1' },
					'30%': { transform: 'translateY(0)', opacity: '1' },
					'45%': { transform: 'translateY(-100%)', opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0.1' },
				},
				scroll: {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform:
							'translateX(calc(-256px * 21 - 0.5rem * 42))',
					},
				},
				flipHorizontal: {
					'0%, 100%': {
					  transform: 'rotateY(0deg)',
					},
					'50%': {
					  transform: 'rotateY(180deg) scaleX(-1)',
					},
				  },
			},
			animation: {
				flipHorizontal: 'flipHorizontal 3s linear infinite',
				scroll: 'scroll 100s linear infinite',
				slide: 'slide 2.5s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
};
export default config;
