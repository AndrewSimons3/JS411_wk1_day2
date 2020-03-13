import React from 'react';

import './App.css';





//https://api.punkapi.com/v2/beers


class App extends React.Component {
  state = {
    beers: [{name: "foo" }]
  }
  componentDidMount() {
    fetch("/https://api.punkapi.com/v2/beers").then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState()
  });
  }

  render() {
  return (
    <div className="App">
    </div>
  );
}
}

export default App;
