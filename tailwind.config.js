/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'ivy-ora': ['Ivy Ora Display', 'serif'],
        'ivy-presto-display': ['Ivy Presto Display', 'serif'],
        'ivy-presto-text': ['Ivy Presto Text', 'serif'],
        'sohne': ['TestSohne', 'sans-serif']
      }
    },
  },
  plugins: [],
}

