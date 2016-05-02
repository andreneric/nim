
import React from 'react';
import ReactDOM from 'react-dom';
import Top from './top.js';
import style from '../styles/main.scss';

var Wrap = React.createClass({
  getInitialState: function() {
    return null
  },
  render: function(){
    return (
      <div id="wrapper">
      	<Top />
      	<h1>Hello World</h1>
      </div>
    );
  }
});

ReactDOM.render(<Wrap />, document.getElementById('example'));