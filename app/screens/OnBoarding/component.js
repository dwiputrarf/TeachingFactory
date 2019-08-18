/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Swiper from '../../components/elements/Swiper';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('UserAuth');
  };

  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <StatusBar hidden />
        <Swiper onPress={this._onPress}>
          <View style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={IMAGES.onBoarding1} resizedMode="contain" style={styles.image} />
            </View>
            <Text style={styles.header}>{I18n.t('onBoarding.title1')}</Text>
            <Text style={styles.text}>{I18n.t('onBoarding.desc1')}</Text>
          </View>

          <View style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={IMAGES.onBoarding2} resizedMode="contain" style={styles.image} />
            </View>
            <Text style={styles.header}>{I18n.t('onBoarding.title2')}</Text>
            <Text style={styles.text}>{I18n.t('onBoarding.desc2')}</Text>
          </View>

          <View style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={IMAGES.onBoarding3} resizedMode="contain" style={styles.image} />
            </View>
            <Text style={styles.header}>{I18n.t('onBoarding.title3')}</Text>
            <Text style={styles.text}>{I18n.t('onBoarding.desc3')}</Text>
          </View>
        </Swiper>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
