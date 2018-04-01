import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';
import ContextProvider from './context.provider';
import Dashboard from './component/dashboard';



class App extends Component {


  
  render = () => {
      return (
        <ContextProvider >
          <Dashboard />
        </ContextProvider >
      );
  }


}
export default App;