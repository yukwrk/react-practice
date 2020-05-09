import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("Im clicked.")}} />
      </React.Fragment>
    ) 
  }
}

export default App;
