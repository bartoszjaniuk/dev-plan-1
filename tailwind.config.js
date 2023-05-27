/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        layout: "rgba(28, 28, 28, 0.95)",
        fontLight: "#dddddd",
      },
      fontFamily: {
        primary: ["var(--font-roboto-mono)"],
        headings: ["var(--font-source-sans-pro)"],
      },
    },
  },
  plugins: [],
};
