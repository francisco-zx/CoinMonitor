import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class BitInka extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://www.bitinka.pe/api/apinka/ticker?format=json')
      .then(response => response.json())
      .then(data => this.setState({
        buy: Math.round(data.ARS.ask),
        sell: Math.round(data.ARS.bid)
      }))
  }

  render() {
    return (
      <PriceCard
        name='BitInka'
        Buy={Math.round(this.state.buy)}
        sell={Math.round(this.state.sell)} />
    );
  }
}

const styles = StyleSheet.create({

});
