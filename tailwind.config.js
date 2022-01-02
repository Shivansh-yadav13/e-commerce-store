module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    screens: {
      'mobile-sm': {'max': '400px'},
      'mobile': {'max': '700px'},
      'tablet': {'max': '768px'},
      'laptop-sm': {'max': '1114px'},
      'laptop': {'max': '1024px'},
      'desktop': {'max': '1280px'},
    },
    colors: {
      'base': 'var(--base-color)',
      'shade': 'var(--shade-color)',
      'shade-fade': 'var(--shade-fade-color)',
      'yellow': 'rgb(253 224 71)',
      'green': 'rgb(52 211 153)',
      'main': 'var(--main-color)'
    },
    extend: {
      textColor: {
        color: {
          base: 'var(--base-color)',
          main: 'var(--main-color)',
          shade: 'var(--shade-color)',
          shadeFade: 'var(--shade-fade-color)',
          yellow: 'rgb(253 224 71)',
          green: 'rgb(52 211 153)'
        }
      },
      backgroundColor: {
        color: {
          base: 'var(--base-color)',
          main: 'var(--main-color)',
          shade: 'var(--shade-color)',
          shadeFade: 'var(--shade-fade-color)',
          yellow: 'rgb(253 224 71)',
          green: 'rgb(52 211 153)'
        }
      },
      height: {
        'image': '500px',
      },
      width: {
        'image': '300px',
      }
    },
  },
  plugins: [],
}