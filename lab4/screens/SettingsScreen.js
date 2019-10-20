import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Active Screen</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Done',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  }
});
