import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class SatoshiTango extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://api.satoshitango.com/v2/ticker')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        buyArs: Math.round(data.data.compra.arsbtc),
        sellArs: Math.round(data.data.venta.arsbtc),
        buyUsd: Math.round(data.data.compra.usdbtc),
        sellUsd: Math.round(data.data.venta.usdbtc)
      })
    })
  }

  render() {
    return (
      this.props.currency === 'ars' ?
        <PriceCard
          name='Satoshi Tango'
          Buy={this.state.buyArs}
          sell={this.state.sellArs}
          icon={require('../logos/logo-satoshi.png')}
          currency={this.props.currency}
        />
      :
        <PriceCard
          name='Satoshi Tango'
          Buy={this.state.buyUsd}
          sell={this.state.sellUsd}
          icon={require('../logos/logo-satoshi.png')}
          currency={this.props.currency}
        />

    );
  }
}

const styles = StyleSheet.create({

});
