/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Swiper from '../../components/elements/Swiper';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <Swiper onPress={this._onPress}>
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
