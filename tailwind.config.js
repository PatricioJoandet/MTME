/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinCustom: "spinCustom 3s linear infinite",
      },
      keyframes: {
        spinCustom: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
