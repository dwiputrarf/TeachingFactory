/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Swiper from '../../components/elements/Swiper';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <Swiper onPress={this._onPress}>
        <View style={styles.slide}>
          <Text style={styles.header}>{I18n.t('onBoarding.title1')}</Text>
          <Text style={styles.text}>{I18n.t('onBoarding.desc1')}</Text>
        </View>

        <View style={styles.slide}>
          <Text style={styles.header}>{I18n.t('onBoarding.title2')}</Text>
          <Text style={styles.text}>{I18n.t('onBoarding.desc2')}</Text>
        </View>

        <View style={styles.slide}>
          <Text style={styles.header}>{I18n.t('onBoarding.title3')}</Text>
          <Text style={styles.text}>{I18n.t('onBoarding.desc3')}</Text>
        </View>
      </Swiper>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
