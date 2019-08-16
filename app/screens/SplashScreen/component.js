import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('OnBoarding');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );

  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <StatusBar hidden />
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
        <Text style={styles.appVersion}>{I18n.t('appVersion')}</Text>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
