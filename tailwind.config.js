// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default {
  theme: {
    extend: {
      colors: {
        primary: "#085E40",
        primary_hover: "#033324",
        surface: "#F7F7F7",
        secondary: "#F1650D",
        secondary_hover: "#d95707",
        light_gray: "#717171",
        black: "#1C1C1C",
        warm_bg: "#FCFAF6", // clean, warm beige background like oja.com.ng
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};
