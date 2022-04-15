module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepblue: '#0000F8',
        lightblue: '#120DFF'
      },
      cursor: {
        'fancy': 'url(/cursor.png), pointer',
      },
      letterSpacing: {
        onepx: '1px',
        tenpx: '10px',
      },
      fontFamily: {
        sans: ['Comfortaa light'],
        ComfortaaBold: ['Comfortaa Bold'],
      }
    },
  },
  plugins: [],
}
