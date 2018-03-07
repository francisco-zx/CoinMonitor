import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { NativeRouter, Route, Link, Fade, Switch } from 'react-router-native';



export default class calcIcon extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }


  render() {
    return (

        <Image source={require('./calc_icon.png')} />
    );
  }
}
