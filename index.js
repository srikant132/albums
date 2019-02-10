/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
//import a library to help create  a registerComponent
import React from 'react';
import { AppRegistry } from 'react-native';
import { Header } from './src/components/Header';

//create a registerComponent
const App = () => (
     <Header />
  );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);


// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
