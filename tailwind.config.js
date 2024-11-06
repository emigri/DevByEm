/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('assets/hero-image.jpg')"
      },
      backgroundColor: {
        "nav-background": "#fffff",
        "body-background": "#AA4465"
      }
    }
  },
  plugins: []
};
