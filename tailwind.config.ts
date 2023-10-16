import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
