import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class Blockchain extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://blockchain.info/es/ticker')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        buy: Math.round(data.USD.buy),
        sell: Math.round(data.USD.sell)
      })
    })
  }

  render() {
    return (
      this.props.currency === 'ars' ?
        <PriceCard
          name='Blockchain'
          Buy={Math.round(this.state.buy * this.props.dolar)}
          sell={Math.round(this.state.sell * this.props.dolar)}
          icon={require('../logos/logo-blockchain.png')}
          currency={this.props.currency}
        />
      :
        <PriceCard
          name='Blockchain'
          Buy={Math.round(this.state.buy)}
          sell={Math.round(this.state.sell)}
          icon={require('../logos/logo-blockchain.png')}
          currency={this.props.currency} 
        />

    );
  }
}

const styles = StyleSheet.create({

});
