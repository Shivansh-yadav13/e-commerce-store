module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    screens: {
      'mobile': {'max': '414px'},
      'tablet': {'max': '768px'},
      'laptop': {'max': '1024px'},
      'desktop': {'max': '1280px'},
    },
    colors: {
      'base': 'var(--base-color)',
      'shade': 'var(--shade-color)'
    },
    extend: {
      textColor: {
        color: {
          base: 'var(--base-color)',
          shade: 'var(--shade-color)'
        }
      },
      backgroundColor: {
        color: {
          base: 'var(--base-color)',
          shade: 'var(--shade-color)'
        }
      }
    },
  },
  plugins: [],
}