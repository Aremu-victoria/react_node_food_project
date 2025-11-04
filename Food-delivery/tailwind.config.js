const flowbite = require("flowbite/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // include Flowbite React components so Tailwind can tree-shake correctly
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#ff5733', 
      },
    },
  },
  plugins: [
    flowbite,
  ],
}