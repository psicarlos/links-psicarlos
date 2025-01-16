/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "fundo-site": "url('./assets/images/sala_atendimento2.jpg')",
      },
    },
  },

  plugins: [],
};
