/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View } from 'react-native';
import Masonry from 'react-native-masonry';
import ARRAY from '../../constants/arrays';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';

const data = ARRAY.MASONRY_DATA;

export default class Component extends React.Component {
  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <Header title="History" burger setting />
        <View style={styles.masonryList}>
          <Masonry bricks={data} columns={2} priority="balance" />
        </View>
      </MainScreen>
    );
  }
}
