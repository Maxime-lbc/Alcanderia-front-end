module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'carrousel-1': "url('client/assets/images/spawn.png')",
        'carrousel-2': "url('client/assets/images/spawn2.png')",
      },
      blur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        inner: 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.7)',
      },
      height: {
        30: '7.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
        152: '38rem',
        156: '39rem',
        160: '40rem',
      },
      width: {
        "20%": '20%',
      }
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      width: ['hover']
    },
  },
  plugins: [],
}
