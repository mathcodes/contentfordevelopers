module.exports = {
  module: {
    // …
    rules: [
      // …
      {
        test: /\.mdx?$/,
        use: [
          // Note that Webpack runs right-to-left: `@mdx-js/loader` is used first, then
          // `babel-loader`.
          {loader: 'babel-loader', options: {}},
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {},
          },
        ]
      }
    ]
  }
}