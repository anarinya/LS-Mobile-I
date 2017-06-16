import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageDetailScreen, NewsLandingScreen } from './src/components';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewsLandingScreen />
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
