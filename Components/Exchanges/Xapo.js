import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class Xapo extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://api.xapo.com/v3/quotes/BTCUSD')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        buy: Math.round(data.fx_etoe.BTCUSD.rate),
        sell: Math.round(data.fx_etoe.BTCUSD.rate)
      })
    })
  }

  render() {
    return (
        this.props.currency === 'ars' ?
        <PriceCard
          name='Xapo'
          Buy={Math.round(this.state.buy * this.props.dolar)}
          sell={Math.round(this.state.sell * this.props.dolar)}
          icon={require('../logos/logo-xapo.png')}
          currency={this.props.currency}
        />
        :
        <PriceCard
          name='Xapo'
          Buy={Math.round(this.state.buy)}
          sell={Math.round(this.state.sell)}
          icon={require('../logos/logo-xapo.png')}
          currency={this.props.currency}
        />
    );
  }
}

const styles = StyleSheet.create({

});
