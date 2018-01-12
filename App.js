import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

//Components
import PriceCard from './Components/PriceCard';
import PriceList from './Components/PriceList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Price</Text>
          <Text style={styles.headerPrice}>$269.000 <Text style={styles.headerPriceRef}>BTC | ARS</Text></Text>
        </View>
        <PriceList />
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
    height: 110,
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
    flex:2,
    alignItems: 'flex-end',
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 70,
    paddingLeft: 8,
    fontSize: 30,
    width: 200
  },
  headerPrice: {
    flex:1,
    justifyContent: 'flex-end',
    fontSize:18,
    width: 200,
    paddingTop: 83,
  },
  headerPriceRef: {
    fontSize: 9,
    fontWeight: '100'
  }
});
