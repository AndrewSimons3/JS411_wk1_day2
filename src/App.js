import React from 'react';
import './App.css';





//https://api.punkapi.com/v2/beers


class App extends React.Component {
  state = {
    beers: []
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers").then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState({beers: data})
  });
  }

  likeBeer(beer) {
    let newBeers = this.state.beers.map((aBeer) => {
      //new array to set the new state of beers so one of beers has a different value for isLiked
      if(aBeer.id === beer.id) {
        aBeer.isLiked = !aBeer.isLiked
      }
      return aBeer
    })

    this.setState({beers: newBeers})
    
    console.log(beer)
  }

  render() {
    
    return (
      <div>
        <h1>
          Beer List 
        </h1>
        <ul>
        {this.state.beers.map((beer, index) => {
          return(<li key={index}>
            <span>{beer.name}</span>
            <button onClick={this.likeBeer.bind(this, beer)}>{beer.isLiked ? "Unlike" : "Like"}</button>
          </li>)
        })}
        </ul>
      </div>
    );
  }
}

export default App;
