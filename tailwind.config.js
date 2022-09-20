/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
    theme: {
        colors: {
            primary: "#fe5f1e",
            light_primary: "#fe5d1e33",
            white: "#fff",
            gray: colors.gray,
        },
    },
    plugins: [],
};
