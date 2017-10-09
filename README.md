# chatXR
A chat room written in react and initialed with [create-react-app](https://github.com/facebookincubator/create-react-app)

## personal configuration
some configuration need to be set manully:  

- add less-loader below all css loaders
- add [babel-plugin-react-css-modules](https://www.npmjs.com/package/babel-plugin-react-css-modules) to write css modules,which need add sth in css-loader options
  - modules: true
  - localIdentName:`[path]___[name]__[local]___[hash:base64:5]`
- todo