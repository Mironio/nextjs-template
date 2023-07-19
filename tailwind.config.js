/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sofia-pro)'],
      },
      colors: {
        'pq-95-black': 'var(--pq-95-black)',
        'pq-indigo': 'var(--pq-indigo)',
      },
      boxShadow: {
        'pq-m': '0px 2px 6px 2px rgba(0, 0, 0, 0.15),  0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  plugins: [],
};
