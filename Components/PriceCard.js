import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.priceCard}>
            <Image source={this.props.icon} style={styles.priceCardLogo} />
            <View style={styles.priceCardDetails}>
              <Text style={styles.priceCardName}>
                {this.props.name}
              </Text>
              <Text style={styles.priceCardBuySell}>
                Compra: <Text style={styles.priceCardPrice}>
                  ${this.props.Buy ? this.props.Buy.toString().replace(/\B(?=(\d{3})+\b)/g, ".") : 0}
                  <Text style={styles.PriceRef}> {this.props.currency ==='ars' ? 'ARS' : 'USD' }</Text>
                </Text>
              </Text>
              <Text style={styles.priceCardBuySell}>
                Venta: <Text
                  style={styles.priceCardPrice}>
                   ${this.props.sell ? this.props.sell.toString().replace(/\B(?=(\d{3})+\b)/g, ".") : 0}
                   <Text style={styles.PriceRef}> {this.props.currency ==='ars' ? 'ARS' : 'USD' }</Text>
                </Text>
              </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  priceCard: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    padding: 10,
    height: 100,
    margin: 10,
    shadowColor: '#0a0a0a',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 7
  },
  priceCardLogo: {
    flex: 2,
    height: 75,
    resizeMode: Image.resizeMode.contain
  },
  priceCardDetails: {
    flex: 3,
    marginLeft: 20,
    marginTop:5
  },
  priceCardName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 1
  },
  priceCardBuySell: {
    fontSize: 16
  },
  priceCardPrice: {
    fontWeight: '100'
  },
  PriceRef: {
    fontSize: 11,
    fontWeight: '100'
  }
});
