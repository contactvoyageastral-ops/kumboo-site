/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        graphite: "#526071",
        pearl: "#FBFCFF",
        mist: "#F5F8FF",
        champagne: "#8DD7C2",
        copper: "#FF8A7A",
        sage: "#B9E7C9",
        ocean: "#91C8FF",
        lavender: "#DCCBFF",
        lemon: "#FFE7A8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(145, 200, 255, 0.24)",
        glass: "0 18px 60px rgba(82, 96, 113, 0.14)"
      },
      backgroundImage: {
        "radial-luxury": "radial-gradient(circle at 14% 12%, rgba(141, 215, 194, 0.34), transparent 28%), radial-gradient(circle at 82% 8%, rgba(220, 203, 255, 0.38), transparent 26%), radial-gradient(circle at 72% 62%, rgba(145, 200, 255, 0.24), transparent 30%)"
      }
    }
  },
  plugins: []
};
