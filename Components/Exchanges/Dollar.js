import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

//Components
import PriceCard from '../PriceCard';

export default class Dollar extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('http://ws.geeklab.com.ar/dolar/get-dolar-json.php')
      .then(response => response.json())
      .then(data => this.setState({
        dolar: data.libre,
        dolarBlue: data.blue
      }));
  }

  render() {
    return (
      <View style={styles.priceCard}>
        <Image source={require('../logos/logo-dolar.png')} style={styles.priceCardLogo} />
        <View style={styles.priceCardDetails}>
          <Text style={styles.priceCardName}>Dolar</Text>
          <Text>Oficial: <Text style={styles.priceCardPrice}>${this.state.dolar}</Text></Text>
          <Text>Blue: <Text style={styles.priceCardPrice}>${this.state.dolarBlue}</Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  priceCard: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'rgba(256,256,256,0.6)',
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
    fontSize: 20,
    marginBottom: 1
  },
  priceCardBuySell: {
    fontSize: 16
  },
  priceCardPrice: {
    fontWeight: '100'
  }
});
