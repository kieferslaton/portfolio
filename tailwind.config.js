module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // ...
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
      '4/10': '40%',
      '6/10': '60%'
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
      '4/10': '40%',
      '6/10': '60%'
    }),
    // ...
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
