import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import PriceCard from './PriceCard';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.priceList}>
        <PriceCard name='Ripio'/>
        <PriceCard name='Satoshi Tango' />
        <PriceCard name='Bitex.la'/>
        <PriceCard name='cex.io'/>
        <PriceCard name='ArgenBTC'/>
        <PriceCard name='BitInka'/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
