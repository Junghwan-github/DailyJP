module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screen': './src/screens',
          '@shared': './src/shared'
        }
      }
    ]
  ]
};
