import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>This is Splash Screen</Text>
      </View>
    );
  }
}
