import React from 'react';
import { View, Text } from 'react-native';

import MainScreen from '../../components/layouts/MainScreen';
import I18n from '../../i18n';
import styles from './styles';
import Header from '../../components/elements/Header';

export default class Component extends React.Component {
  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <Header title={I18n.t('header.picker')} back />
        <View style={styles.titleContainer}>
          <Text>{I18n.t('header.picker')} </Text>
        </View>
      </MainScreen>
    );
  }
}
