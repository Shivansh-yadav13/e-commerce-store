module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    screens: {
      'mobile-sm': {'max': '400px'},
      'mobile': {'max': '700px'},
      'tablet': {'max': '768px'},
      'tablet-md': {'max': '1090px'},
      'laptop-sm': {'max': '1114px'},
      'laptop-md': {'max': '1300px'},
      'laptop': {'max': '1024px'},
      'desktop': {'max': '1280px'},
      'desktop-lg': {'max': '1600px'}
    },
    colors: {
      'base': 'var(--base-color)',
      'shade': 'var(--shade-color)',
      'shade-fade': 'var(--shade-fade-color)',
      'yellow': 'rgb(253 224 71)',
      'green': 'rgb(52 211 153)',
      'main': 'var(--main-color)',
      'red': 'rgba(235, 68, 62, 0.931)'
    },
    extend: {
      textColor: {
        color: {
          base: 'var(--base-color)',
          main: 'var(--main-color)',
          shade: 'var(--shade-color)',
          shadeFade: 'var(--shade-fade-color)',
          yellow: 'rgb(253 224 71)',
          green: 'rgb(52 211 153)',
          red: 'rgba(235, 68, 62, 0.931)'
        }
      },
      backgroundColor: {
        color: {
          base: 'var(--base-color)',
          main: 'var(--main-color)',
          shade: 'var(--shade-color)',
          shadeFade: 'var(--shade-fade-color)',
          yellow: 'rgb(253 224 71)',
          green: 'rgb(52 211 153)',
          red: 'rgba(235, 68, 62, 0.931)'
        }
      },
      height: {
        'image': '500px',
        'pop-up': '40rem'
      },
      width: {
        'image': '300px',
        'pop-up': '90rem'
      }
    },
  },
  plugins: [],
}