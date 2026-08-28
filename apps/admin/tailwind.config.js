const sharedConfig = require('../../packages/config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
    '../../packages/ui/*.{ts,tsx}',
  ],
};
