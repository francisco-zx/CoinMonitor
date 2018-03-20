import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native';

import Header from '../Layout/Header';

export default class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      btc: 1,
      price: '',
      percentChange: 0,
      total: 0,
      btcInputWidth: 80
    }
  }

  componentWillMount(){
    fetch('https://www.bitstamp.net/api/ticker/')
      .then(response => response.json())
      .then(data => this.setState({
        price: Math.round(data.last)
      }, () => {
        this.calculate();
      }));
  }

  ComponentDidUpdate(){
    this.calculate();
  }

  calculate = () => {
    this.setState({
      total: this.state.btc * this.props.bitstamp + (this.props.bitstamp * (this.state.percentChange / 100))
    })
  }
  handleChangeBTC = (text) => {
    this.setState({
      btc: text.replace(',', '.')
    }, () => {
      this.calculate();
    });
  }

  handleChangePercent = (text) => {
    this.setState({
      percentChange: text
    }, () => {
      this.calculate();
    });
  }

  render() {
    return (
        this.state.price ?
          <KeyboardAvoidingView style={styles.calculator} behavior='padding'>
            <View style={styles.row}>
              <TextInput
                keyboardType='numeric'
                returnKeyType='done'
                keyboardAppearance='dark'
                style={styles.inputBTC}
                placeholder="1"
                placeholderTextColor='#5e5e5e'
                onChangeText={(text) => this.handleChangeBTC(text)}
              />
              <Text style={styles.ref}>BTC</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.percentItem}>+</Text>
              <TextInput
                keyboardType='numeric'
                returnKeyType='done'
                keyboardAppearance='dark'
                style={styles.inputPercent}
                placeholder="0"
                placeholderTextColor='#5e5e5e'
                onChangeText={(text) => this.handleChangePercent(text)}
              />
              <Text style={styles.percentItem}>%</Text>
            </View>
            <View style={styles.row}>
              <Text>=</Text>
              <Text style={styles.total}>
                {
                  this.props.currency === 'ars' ?
                    <Text>$ {Math.round(this.state.total  * this.props.dolar).toString().replace(/\B(?=(\d{3})+\b)/g, ",")} </Text>
                  :
                    <Text>$ {Math.round(this.state.total).toString().replace(/\B(?=(\d{3})+\b)/g, ",")}</Text>
                }
              </Text>
            </View>
          </KeyboardAvoidingView>
        :<ActivityIndicator size="large" color="#00ff00" style={styles.loader} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  calculator: {
    flex:1,
    margin:20
  },
  inputPercent: {
    fontSize:62,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    width: 120,
    color:'white'
  },
  inputBTC: {
    flex:4,
    fontSize:62,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center'
  },
  ref: {
    fontSize:18,
    flex: 1,
    fontWeight:'100',
    color: '#fff'
  },
  percent: {
    flexDirection: 'row',
    color:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentItem: {
    fontSize: 18,
    fontWeight: '100',
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  equals: {
    fontSize:11,
    fontWeight:'100',
    color:'white'
  },
  total: {
    fontSize: 55,
    flex:1,
    color:'white',
    fontWeight: 'bold',
    paddingLeft: 20

  },
  loader: {
    flex:1
  }


});
