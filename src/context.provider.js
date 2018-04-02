import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';


global.AppContext = React.createContext();

ContextProvider(AppComponent, StoreObjects){
  return (
    <myContext.Consumer>
    {(context) => (
      <AppComponent {...props}             
        clockInfo={context.state.clock}
        valueInfo={context.state.value}
      />
    )}

    </myContext.Consumer>
  );
};

export default ContextProvider;


export default props => (
  <myContext.Consumer>
    {(context) => (
      <Clock {...props}             
        clockInfo={context.state.clock}
        valueInfo={context.state.value}
      />
    )}
  </myContext.Consumer>