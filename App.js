import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { NativeRouter, Route, Link, Fade, Switch } from 'react-router-native';

//Components
import Header from './Components/Layout/Header';
import Navigation from './Components/Layout/Navigation';
import PriceCard from './Components/PriceCard';
import PriceList from './Components/PriceList';
import Calculator from './Components/Calculator/Calculator';
import BlockChainData from './Components/BlockChain/BlockChainData';
import Chart from './Components/Chart/Chart';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currency: 'ars',
      route: 'Precio'
    }
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

  changeCurrency = () => {
    this.state.currency === 'ars' ?
    this.setState({currency: 'usd'})
    : this.setState({currency: 'ars'})
  }

  changeRoute = (route) => {
    this.setState({
      route: route
    })
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Header name={this.state.route} changeCurrency={this.changeCurrency} currency={this.state.currency}/>
            <Route
              path='/'
              exact={true}
              render={()=>
                <PriceList
                  dolar={this.state.dolar}
                  updateUser={this.updateUser}
                  currency={this.state.currency}
                  changeCurrency={this.changeCurrency}
                  bitstamp={this.state.bitstamp}
                />
              }/>
            <Route
              path='/calculator'
              exact={true}
              render={()=>
                <Calculator
                  dolar={this.state.dolar}
                  updateUser={this.updateUser}
                  currency={this.state.currency}
                  changeCurrency={this.changeCurrency}
                  bitstamp={this.state.bitstamp}
                />
              }/>
            <Route
              path='/chart'
              exact={true}
              render={()=>
                <Chart
                  dolar={this.state.dolar}
                  updateUser={this.updateUser}
                  currency={this.state.currency}
                  changeCurrency={this.changeCurrency}
                  bitstamp={this.state.bitstamp}
                />
              }/>
          <View style={styles.navigation}>
            <Link
              to="/"
              style={styles.navigationItem}
              onPress={() => {this.changeRoute("Precio")}}>
              <Text>Precios</Text>
            </Link>
            <Link
              to="/calculator"
              style={styles.navigationItem}
              onPress={() => {this.changeRoute("Calculadora")}}>
              <Text>Calculadora</Text>
            </Link>
            <Link
              to="/chart"
              style={styles.navigationItem}
              onPress={() => {this.changeRoute("Gráfico")}}>
              <Text>Mercado</Text>
            </Link>
            <Link
              to="/blockchain"
              style={styles.navigationItem}
              onPress={() => {this.changeRoute("Blockchain")}}>
              <Text>asdasd</Text>
            </Link>
          </View>
        </View>
        </NativeRouter>
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
  },
  navigation: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    shadowColor: '#0a0a0a',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  navigationItem: {
    flex:1,
    alignItems: 'center'
  }
});
