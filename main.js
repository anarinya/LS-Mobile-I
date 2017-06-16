import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageDetail, DetailScreen } from './src/components';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',

  },
});

Expo.registerRootComponent(App);
