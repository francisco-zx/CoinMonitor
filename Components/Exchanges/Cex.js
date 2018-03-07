import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class Cex extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://cex.io/api/ticker/BTC/USD')
      .then(response => response.json())
      .then(data => this.setState({
        buy: Math.round(data.ask),
        sell: Math.round(data.bid)
      }))
  }

  render() {
    return (
      this.props.currency === 'ars' ?
        <PriceCard
          name='Cex.io'
          Buy={Math.round(this.state.buy * this.props.dolar)}
          sell={Math.round(this.state.sell * this.props.dolar)}
          icon={require('../logos/logo-cex.png')}
          currency={this.props.currency}
        />
      :
        <PriceCard
          name='Cex.io'
          Buy={Math.round(this.state.buy)}
          sell={Math.round(this.state.sell)}
          icon={require('../logos/logo-cex.png')}
          currency={this.props.currency}
        />

    );
  }
}

const styles = StyleSheet.create({

});
