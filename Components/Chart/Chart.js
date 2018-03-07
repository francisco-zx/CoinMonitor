import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ActivityIndicator } from 'react-native';

import Header from '../Layout/Header';

export default class Chart extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    fetch('https://bitex.la/api-v1/rest/btc_usd/market/last_7_days')
      .then(response => response.json())
      .then(data => this.setState({
        sevenDays: data
      }));
  }


  render() {
    return (
        this.state.sevenDays ?
          <View style={styles.chart}>
            <View style={styles.row}>
              {
                this.state.sevenDays.map((p, index) => {
                    return (
                      <Text key={this[1]}>{this[2]}</Text>
                    )
                })
              }
            </View>
          </View>
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
    width: 120
  },
  inputBTC: {
    fontSize:62,
    fontWeight: 'bold',
    width: 120,
    paddingLeft: 20,
    paddingRight: 20
  },
  ref: {
    fontSize:18,
    fontWeight:'100',
  },
  percent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentItem: {
    fontSize: 18,
    fontWeight: '100'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  equals: {
    fontSize:11,
    fontWeight:'100',
  },
  total: {
    fontSize:62,
    flex:1,
    fontWeight: 'bold',
    paddingLeft: 20

  },
  loader: {
    flex:1
  }


});
