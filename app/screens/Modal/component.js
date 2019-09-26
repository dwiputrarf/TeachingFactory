import React from 'react';
import { View } from 'react-native';

import MainScreen from '../../components/layouts/MainScreen';
import I18n from '../../i18n';
import styles from './styles';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <Header title={I18n.t('header.modal')} back />
        <View style={styles.titleContainer}>
          <Button title={I18n.t('header.modal')} />
        </View>
      </MainScreen>
    );
  }
}
