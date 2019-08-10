import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
        <Text style={styles.appVersion}>{I18n.t('appVersion')}</Text>
      </View>
    );
  }
}
