import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'shopee-red': 'rgb(238, 77, 45)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
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
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		transform: {
  			'translate-z-0': 'translateZ(0)'
  		},
  		overflowClipMargin: {
  			content: 'content-box'
  		},
  		boxShadow: {
  			ssm: '0 1px 1px 0 rgba(0,0,0,.05)',
  			arrow: '0 1px 8px 0 rgba(0,0,0,.09)',
  			search: '0 .125rem .25rem rgba(0, 0, 0, .09)',
  			signuphead: ' 0 6px 6px rgba(0, 0, 0, .06)',
  			'inset-sm': 'inset 0 1px 0 0 rgba(0, 0, 0, 0.05)'
  		},
  		borderColor: {
  			customhsla: 'hsla(0, 0%, 100%, 0.4)'
  		},
  		spacing: {
  			'focus-indicator': '3px'
  		},
  		width: {
  			'custom-1200': '1200px',
  			'custom-400': '400px'
  		},
  		minWidth: {
  			'custom-1200': '1200px'
  		},
  		important: 'true',
  		transitionTimingFunction: {
  			'custom-bezier': 'cubic-bezier(.4,0,.2,1)',
  			'custom-bezier2': 'cubic-bezier(0.4, 0, 0.6, 1)'
  		},
  		transitionProperty: {
  			'margin-top': 'margin-top',
  			top: 'top'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
