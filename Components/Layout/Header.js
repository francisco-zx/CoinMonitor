import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currency: 'ars'
    };
  }

  componentWillMount(){
    fetch('http://ws.geeklab.com.ar/dolar/get-dolar-json.php')
      .then(response => response.json())
      .then(data => this.setState({
        dolar: data.libre,
        dolarBlue: data.blue
      }));

    fetch('https://www.bitstamp.net/api/ticker/')
      .then(response => response.json())
      .then(data => this.setState({
        bitstamp: Math.round(data.last)
      }))
  }

  render() {
    return (

        <View style={styles.header}>
          <Text style={styles.headerTitle}>{this.props.name}</Text>
          <TouchableHighlight onPress={this.props.changeCurrency} underlayColor='white'>
              { this.props.currency === 'ars' ?
                this.state.bitstamp  && this.state.dolar?
                <Text style={styles.headerPrice}>${Math.round(this.state.bitstamp *  this.state.dolar).toString().replace(/\B(?=(\d{3})+\b)/g, ".")}<Text style={styles.headerPriceRef}> ARS</Text></Text>
                : <Text></Text>
                :
                this.state.bitstamp  && this.state.dolar?
                <Text style={styles.headerPrice}>${this.state.bitstamp.toString().replace(/\B(?=(\d{3})+\b)/g, ".")}<Text style={styles.headerPriceRef}> USD</Text></Text>
                : <Text>nada por aqui </Text>
              }
          </TouchableHighlight>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 120,
    marginBottom: 10,
    shadowColor: '#0a0a0a',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  headerTitle: {
    flex:1,
    alignItems: 'flex-end',
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 70,
    paddingLeft: 8,
    fontSize: 32,
    width: 200
  },
  headerPrice: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    fontWeight: '700',
    fontSize:30,
    textAlign: 'right',
    paddingRight: 8,
    width: 200,
    paddingTop: 74,
  },
  headerPriceRef: {
    fontSize: 11,
    fontWeight: '100'
  }
});
