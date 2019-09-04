import React from 'react';
import { View, Text } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import styles from '../../components/elements/Toast/styles';

export default class Component extends React.Component {
  render() {
    return (
      <MainScreen>
        <View style={styles.titleContainer}>
          <Text>Button</Text>
        </View>
      </MainScreen>
    );
  }
}
