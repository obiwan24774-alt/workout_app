/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b6af3",
        accent: "#f3c614",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [], // ← Tailwind用プラグインを配列で指定
};
