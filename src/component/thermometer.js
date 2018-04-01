import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';
class ThermoMeter extends Component {

// componentDidMount() 
  render = () => {
    const myContext = global.AppContext;
   
      return (
        <View >

          <myContext.Consumer>
          {(context) => (
            
            
            <TouchableOpacity onPress={context.addvalue}>

              <View style={ {backgroundColor:'green'}}>
                <Text style={{color:'white'}}> IncreaseValue</Text>
              </View>
            </TouchableOpacity>


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
export default ThermoMeter;