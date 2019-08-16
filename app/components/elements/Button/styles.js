import { StyleSheet } from 'react-native';

import {
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_WHITE,
  COLOR_BASE_TERTIARY_LIGHT,
  COLOR_FONT_PRIMARY_DARK
} from '../../../styles';
import METRICS from '../../../constants/metrics';

const container = {
  width: METRICS.screenWidth - 4 * METRICS.doubleBaseMargin,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_BASE_TERTIARY_LIGHT
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  text: {
    color: COLOR_WHITE
  },
  textDisabled: {
    color: COLOR_FONT_PRIMARY_DARK
  },
  textPressed: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  button: {
    lineHeight: 40
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  buttonDisabled: {}
});
