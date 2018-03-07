import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Components
import Header from './Layout/Header';
import PriceCard from './PriceCard';
import SatoshiTango from './Exchanges/SatoshiTango';
import Bitex from './Exchanges/Bitex';
import Bitstamp from './Exchanges/Bitstamp';
import BitInka from './Exchanges/BitInka';
import Cex from './Exchanges/Cex';
import Dollar from './Exchanges/Dollar';
import Blockchain from './Exchanges/Blockchain';
import Xapo from './Exchanges/Xapo';
import Ripio from './Exchanges/Ripio';
import Calculator from './Calculator/Calculator';


export default class PriceList extends React.Component {
  render() {
    return (
        <ScrollView style={styles.priceList}>
          <Bitstamp dolar={this.props.dolar} currency={this.props.currency}/>
          <Ripio currency={this.props.currency}/>
          <SatoshiTango currency={this.props.currency}/>
          <Bitex dolar={this.props.dolar} currency={this.props.currency}/>
          <Xapo dolar={this.props.dolar} currency={this.props.currency}/>
          <Cex dolar={this.props.dolar} currency={this.props.currency}/>
          <Blockchain dolar={this.props.dolar} currency={this.props.currency}/>
          <Dollar  dolar={this.props.dolar} currency={this.props.currency}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
