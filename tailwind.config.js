/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      mobile: "480px",
      // => @media (min-width: 480px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "soDigital-grey": { 50: "#F5F5F5", 100: "#EFEEEF", 200: "#CAC5C7", 300: "#A69EA2", 400: "#82787D", 500: "#5D5659", 600: "#3A3538", 700: "#1B1819" },
        "soDigital-green": { 100: "#BDFFC2", 300: "#00BA2F" },
        "soDigital-purple": { 100: "#EDD5FF" },
      },
    },
  },
  plugins: [],
};
