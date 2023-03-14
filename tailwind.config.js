/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'ModerateBlue': 'hsl(238, 40%, 52%)',
      'SoftRed': 'hsl(358, 79%, 66%)',
      'LightBlue': 'hsl(239, 57%, 85%)',
      'Palered': 'hsl(357, 100%, 86%)',
      'Darkblue': 'hsl(212, 24%, 26%)',
      'Darkblueop': 'hsl(212, 24%, 26%, 0.5)',
      'GrayishBlue': 'hsl(211, 10%, 45%)',
      'Lightgray': 'hsl(223, 19%, 93%)',
      'Verylightgray': 'hsl(228, 33%, 97%)',
      'White': 'hsl(0, 0%, 100%)',
    },
    extend: {},
  },
  plugins: [],
}