import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import SpeedMeter from './speedmeter';
import Thermometer from './thermometer';
import Clock from './clock';
// import styles from './styles';
class DashBoard extends Component {

// componentDidMount() 
  render = () => {
      return (
        <View >
            <SpeedMeter />
            <Thermometer />
            <Clock />
        </View >
      );
  }
// constructor(props) { super(props); } 
// componentWillMount() {}
// componentWillReceiveProps(){} 
// shouldComponentUpdate(){} 
// componentWillUpdate(){} 
// componentDidUpdate(){} 
// componentWillUnmount(){} 

}
export default DashBoard;