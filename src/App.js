import React from 'react';
import './App.css';





//https://api.punkapi.com/v2/beers


class App extends React.Component {
  state = {
    beers: []
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
      <div>
        <h1>
          Beer List 
        </h1>
        {this.state.beers.map((beer) => {
          console.log(beer)
          return <h2>{beer.name}</h2>
        })}
      </div>
    );
  }
  }

export default App;
