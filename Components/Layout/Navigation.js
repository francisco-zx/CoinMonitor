import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

export default class Navigation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <NativeRouter>
        <View style={styles.navigation}>
          <Link to="/" style={styles.navigationItem}><Text>Price</Text></Link>
          <Link to="/calculator" style={styles.navigationItem} replace><Text>Calculator</Text></Link>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
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
    shadowRadius: 2
  },
  navigationItem: {
    flex:1,
    alignItems: 'center'
  }
});
