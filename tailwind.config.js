/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Plus Jakarta Sans" },
    extend: {
      colors: {
        "main-purple": "#635FC7",
        "main-purple-light": "#A8A4FF",
        black: "#000112",
        "very-dark-grey": "#20212C",
        "dark-grey": "#2B2C37",
        "medium-grey": "#828FA3",
        "light-grey": "#F4F7FD",
        "lines-dark": "#3E3F4E",
        "lines-light": "#E4EBFA",
        red: "#EA5555",
        "red-light": "#FF9898",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
