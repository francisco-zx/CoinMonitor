import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.priceCard}>
        <Image source={require('./logos/logo-ripio.png')} style={styles.priceCardLogo} />
        <View style={styles.priceCardDetails}>
          <Text style={styles.priceCardName}>{this.props.name}</Text>
          <Text>Compra: <Text style={styles.priceCardPrice}>$280.000 ARS</Text></Text>
          <Text>Venta: <Text style={styles.priceCardPrice}>$280.000 ARS</Text></Text>
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
    padding: 20,
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
    flex: 1,
    height: 60,
    resizeMode: Image.resizeMode.contain
  },
  priceCardDetails: {
    flex: 3,
    marginLeft: 20,
    marginTop:5
  },
  priceCardName: {
    fontWeight: 'bold',
    marginBottom:1
  },
  priceCardPrice: {
    fontWeight: '100',
    fontSize:12
  }
});
