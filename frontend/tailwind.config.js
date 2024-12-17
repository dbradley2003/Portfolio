import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }
  
		'md': '768px',
		// => @media (min-width: 768px) { ... }
  
		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }
  
		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }
  
		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }

		'3xl': '2000px',
	},
  	extend: {
  		animation: {
  			typing: 'typing 4s steps(20,end)',
  			blink: 'blink 1s step-end infinite'
  		},
  		keyframes: {
  			typing: {
  				from: {
  					width: '0'
  				},
  				to: {
  					width: '100%'
  				}
  			},
  			blink: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0'
  				}
  			},
  			glitch: {
  				'0%': {
  					textShadow: '2px 0 red, -2px 0 blue'
  				},
  				'20%': {
  					textShadow: '5px 0 red, -5px 0 blue'
  				},
  				'40%': {
  					textShadow: '-2px 0 red, 2px 0 blue'
  				},
  				'60%': {
  					textShadow: '2px -2px red, -2px 2px blue'
  				},
  				'80%': {
  					textShadow: '0 0 red, 0 0 blue'
  				},
  				'100%': {
  					textShadow: '2px 0 red, -2px 0 blue'
  				}
  			}
  		},
  		colors: {
  			
  			pink: '#ef58a0',
  			purple: '#8e2a8b',
  			green: '#97bd4c',
  			neongreen: '#00FF7F',
  			cyan: '#00CED1',
  			yellow: '#fde74e',
  			gray: '#D4D2C8',
  			red: '#ca1f27',
  			link: '#3b82f6',
			accent2: '#87CEEB',
  			background: 'hsl(var(--background))',
  			accent: {
  				default: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			border1: '#DDDDDD',
  			border2: '#E5E5E5',
  			dodgerblue: '#1E90FF',
  			charcoal: '#1C1C1C',
  			tealblue: '#367DA6',
  			primary: {
  				default: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			hover: '#1e293b',
  			steelblue: '#1C5276',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			daft: [
  				'daft',
  				'sans-serif'
  			],
  			blur: [
  				'blur',
  				'sans-serif'
  			],
  			banco: [
  				'banco',
  				'sans-serif'
  			],
  			windows: [
  				'windows',
  				'sans-serif'
  			],
  			pixel: [
  				'pixel',
  				'sans-serif'
  			],
  			pixel2: [
  				'pixel2',
  				'sans-serif'
  			],
  			terminal: [
  				'terminal',
  				'sans-serif'
  			],
  			apple: [
  				'apple',
  				'sans-serif'
  			],
  			appleMedium: [
  				'appleMedium',
  				'sans-serif'
  			],
  			inter: [
  				'inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate]
};



