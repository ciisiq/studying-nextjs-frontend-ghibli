/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "ft-black": "#3C3837",
        "bg-bege": "#FFFDF8",
        "bt-light": "#FFFCFC",
        "line-gray": "#EAEAEA",
        "link-blue-sel": "#86CEDE",
        "ft-font-gray": "#777777",
      },
    },
  },
  plugins: [],
};
