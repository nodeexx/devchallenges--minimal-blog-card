import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,svelte}'],
  plugins: [forms, typography],
  theme: {
    // Replace defaults here
    extend: {
      // Extend defaults here
    },
  },
} satisfies Config;

export default config;
