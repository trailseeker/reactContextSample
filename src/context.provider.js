import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';


global.AppContext = React.createContext();


class ContextProvider extends Component {

  state = {
    name: 'Riri',
    value: 0,
    clock: '12:01'
  }


  render = () => {

    const AppContext = global.AppContext;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addvalue: ()=>{
            this.setState({
              value : this.state.value + 1
            })
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }


}
export default ContextProvider;