/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        principal : '#10B981',
        principalHover : '#0A875E'
      }
    },
  },
  plugins: [],
};
