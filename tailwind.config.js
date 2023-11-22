module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9fafb", 200: "#e5e7eb", 600: "#6b7280", 900: "#111827" },
        black: { 900: "#000000", "900_01": "#020202", "900_26": "#00000026" },
        red: { 600: "#ec3d3d" },
        blue_gray: { 800: "#374151" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 1px  2px 0px #00000026" },
      fontFamily: { monasans: "Mona Sans" },
      textShadow: { ts: "0px 1px  2px #00000026" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
