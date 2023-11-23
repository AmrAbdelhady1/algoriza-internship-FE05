/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'hero': '0px 4px 37px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

