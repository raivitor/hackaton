import React, { Component } from 'react';
import './App.css';
import './css/CustomStyle.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
