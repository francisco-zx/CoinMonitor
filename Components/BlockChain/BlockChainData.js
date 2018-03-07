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
    fetch('https://api.blockchain.info/stats')
      .then(response => response.json())
      .then(data => this.setState({data}))
      .then(console.log(this.state));
  }

  render() {
    return (
        <View style={styles.header}>
          <Text style={styles.blockChain}>{this.state.market_cap_usd}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  blockchain: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 120,
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
    fontWeight: '800',
    paddingTop: 70,
    paddingLeft: 8,
    fontSize: 38,
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
