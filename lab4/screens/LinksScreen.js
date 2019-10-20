import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Active Screen</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Active',
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
