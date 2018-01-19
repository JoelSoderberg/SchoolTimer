/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import CompList from './src/CompList';

export default class App extends Component {
  render() {
    return (
        <CompList />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  header: {
    flex: 2,
    backgroundColor: '#FFEEE4'
  },
  list: {
      flex: 1,
      backgroundColor: 'red'
    }
});

AppRegistry.registerComponent('App', () => App);

