# Allin

Contains all my daily interests, written in react and initialized with [create-react-app](https://github.com/facebookincubator/create-react-app)

## personal configuration

some configuration need to be set manually:  

- add less-loader below all css loaders

- add [babel-plugin-react-css-modules](https://www.npmjs.com/package/babel-plugin-react-css-modules) to write css modules,which require sth in css-loader's options
  - modules: true
  - localIdentName:`[path]___[name]__[local]___[hash:base64:5]`

- todo