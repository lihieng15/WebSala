/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { maxHeight: "0", opacity: "1" },
          "100%": { maxHeight: "auto", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.8s ease-in-out forwards",
      },
      fontFamily: {
        khmermont: ['"Roboto"', '"Khmer OS Battambang"', "serif"],
      },
    },
  },
  plugins: [],
};
