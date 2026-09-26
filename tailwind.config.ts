import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFBF9',
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F5F5F2',
        },
        border: {
          DEFAULT: '#E5E7EB',
          subtle: '#F0F0EC',
        },
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          muted: '#6B7280',
        },
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        matrix: {
          strength: {
            bg: '#ECFDF5',
            text: '#065F46',
            border: '#A7F3D0',
          },
          weakness: {
            bg: '#EFF6FF',
            text: '#1E40AF',
            border: '#BFDBFE',
          },
          opportunity: {
            bg: '#FFFBEB',
            text: '#92400E',
            border: '#FDE68A',
          },
          threat: {
            bg: '#FAF5FF',
            text: '#6B21A8',
            border: '#E9D5FF',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        elevated: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};

export default config;
