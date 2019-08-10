import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import IMAGES from '../../configs/images';
import { COLOR_BLACK } from '../../styles';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{ width: scale(100), height: scale(100) }}>
          <Image
            source={IMAGES.appLogo}
            resizeMode="contain"
            style={{ flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin }}
          />
        </View>
        <Text style={{ fontSize: 18, color: COLOR_BLACK }}>GO GREEN</Text>
        <Text style={{ fontSize: 14 }}>v.1.1</Text>
      </View>
    );
  }
}
