module.exports = {
  rules: {
    elm: {
      svg: 1,
      'svg > path': 1,
      '*': false,
    },
    attr: [
      {
        // ensure that the SVG elm has the appropriate attrs
        role: 'img',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',

        'rule::selector': 'svg',
        'rule::whitelist': true,
      },
      {
        // ensure that the path element only has the 'd' attr (no style, opacity, etc.)
        d: /^[,a-zA-Z0-9\. -]+$/,
        'rule::selector': 'svg > path',
      },
    ],
  },
};
