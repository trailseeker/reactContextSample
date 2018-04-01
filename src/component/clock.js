import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import styles from './styles';
class Clock extends PureComponent {


  render = () => {
      if(!this.props.clockInfo){
        return null;
      }

      console.log("render clock!");

      return (
        <View >
          {/* <myContext.Consumer>
          {(context) => (
            <View style={ {backgroundColor:'red', padding: 50}}>
               <Text style={{color: 'white', fontSize: 18}}>clock {context.state.clock} {context.state.value}</Text>   
            </View>
          )}
          </myContext.Consumer> */}
          <View style={ {backgroundColor:'red', padding: 50}}>
            <Text>{this.props.clockInfo} value... </Text>
          </View>
        </View >
      );
  }

}

const myContext = global.AppContext;
export default props => (
  <myContext.Consumer>
    {(context) => (
      <Clock {...props}             
        clockInfo={context.state.clock}
        valueInfo={context.state.value}
      />
    )}
  </myContext.Consumer>
);