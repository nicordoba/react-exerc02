import React, { Component } from 'react';

class CityView extends Component {
  state = {
    temperature: null,
    condition: null
  }

  componentDidMount() {
    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(this.props.name)}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    const weatherAPI = async () => {
      const response = await fetch(url);
      const obj = await response.json();
      const weather = obj.query.results.channel.item.condition;
      this.setState({
        temperature: weather.temp,
        condition: weather.text
      })
    }
    weatherAPI();
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.state.temperature}</p>
        <p>{this.state.condition}</p>
      </div>
    )
  }
}

export default CityView;