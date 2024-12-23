/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('assets/hero-image.jpg')"
      },
      backgroundColor: {
        "nav-background": "#FFFFF",
        "body-background": "#E9AFA3"
      }
    }
  },
  plugins: []
};
