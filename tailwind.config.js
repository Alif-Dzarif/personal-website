/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': ['0 0px 20px rgba(255,255,255,0.35)', '0 0px 65px rgba(255,255,255,0.2)']
      },
      animation: {
        'waving-hand': 'waving-hand 2.5s infinite'
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-night': 'linear-gradient(0deg, rgba(122,122,122,1) 0%, rgba(5,34,64,1) 50%, rgba(6,7,18,1) 100%)',
        'gradient-morning': 'linear-gradient(0deg, rgba(249,245,245,1) 0%, rgba(99,219,255,1) 51%, rgba(65,169,222,1) 100%)',
        'gradient-afternoon': 'linear-gradient(0deg, rgba(244,232,154,1) 0%, rgba(255,186,67,1) 51%, rgba(255,85,70,1) 100%)',
        'gradient-early-morning': 'linear-gradient(0deg, rgba(152,106,106,1) 0%, rgba(21,76,126,1) 50%, rgba(34,65,175,1) 100%)',
        'gradient-midnight': 'linear-gradient(0deg, rgba(13,13,52,1) 0%, rgba(18,4,48,1) 51%, rgba(14,2,31,1) 100%)'
      })
    },
  },
  plugins: [require("daisyui")],
}