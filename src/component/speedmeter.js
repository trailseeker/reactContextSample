import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';





class SpeedMeter extends Component {


  
// componentDidMount() 
  render = () => {
    const myContext = global.AppContext;
      return (
        <View >
          <myContext.Consumer>
          {(context) => (
            <React.Fragment>
               <Text>SpeedMeter {context.state.name}</Text>   
               <Text>SpeedMeter {context.state.value}</Text>   
            </React.Fragment>
          )}
          </myContext.Consumer>
           
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
export default SpeedMeter;