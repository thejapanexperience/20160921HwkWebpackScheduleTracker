const React = require('react');
/*const {ReactDOM} = require('react-dom');
*/
const { render } = require('react-dom');
const App = require('./components/App');  /*relative file path to linked component*/



render(
  <App/>,
  document.getElementById('root')
)
