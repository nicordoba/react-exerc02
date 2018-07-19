import React, { Component } from 'react';
import './App.css';
import CityView from './CityView';

class App extends Component {
  state = {
    city: "",
    cities: []
  }

  componentDidMount() {
    if(localStorage.getItem("cities")) {
      try{this.setState({
        cities: JSON.parse(localStorage.getItem("cities"))
        });
      }
      catch(e) {};
    }
  }

  cityChanges = event => {
    this.setState({ city: event.target.value });
  }

  addCity = () => {
    this.setState(prevState => ({
      cities: [...prevState.cities, prevState.city],
      city: ""
    }), () => {
      localStorage.setItem("cities", JSON.stringify(this.state.cities));
    });
  }

  render() {
    return (
      <section>
        <h3>Clima</h3>
        <input type="text" placeholder="Ingresar ciudad" onChange={this.cityChanges} value={this.state.city}/>
        <button onClick={this.addCity}>Agregar</button>
        <ul>
          {
            this.state.cities.map( city =>
              <li key={city}>
                <CityView name={city}/>
                </li>)
          }
        </ul>
      </section>
    );
  }
}

export default App;
