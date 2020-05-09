import React from 'react';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("Im clicked.")}} />
//       </React.Fragment>
//     ) 
//   }
// }

const Cat = () => {
  return <div>myao!</div>;
}

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

export default App;
