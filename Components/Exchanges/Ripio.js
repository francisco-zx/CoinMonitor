import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class Ripio extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://www.ripio.com/api/v1/rates/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        buyArs: Math.round(data.rates.ARS_BUY),
        sellArs: Math.round(data.rates.ARS_SELL),
        buyUsd: Math.round(data.rates.USD_BUY),
        sellUsd: Math.round(data.rates.USD_SELL)
      })
    })
  }

  render() {
    return (
      this.props.currency === 'ars' ?
        <PriceCard
          name='Ripio'
          Buy={this.state.buyArs}
          sell={this.state.sellArs}
          icon={require('../logos/logo-ripio.png')}
          currency={this.props.currency}
        />
      : 
        <PriceCard
          name='Ripio'
          Buy={this.state.buyUsd}
          sell={this.state.sellUsd}
          icon={require('../logos/logo-ripio.png')}
          currency={this.props.currency}
        />
    );
  }
}

const styles = StyleSheet.create({

});
