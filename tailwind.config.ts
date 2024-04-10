import type { Config } from 'tailwindcss'

const config = {
  content: ['./index.html', './public/**/*.{js,ts,html}', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Noto Sans JP', 'sans-serif'] },
    },
  },
  plugins: [],
} satisfies Config

export default config
