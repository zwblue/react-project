/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import Home from './src/views/Home.js' 
export default class reactNative extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  }
});

AppRegistry.registerComponent('reactNative', () => reactNative);
