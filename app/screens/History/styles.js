/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import METRICS from '../../constants/metrics';
import { COLOR_EVENT_INACTIVE } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR_EVENT_INACTIVE
  },
  masonryList: { flex: 1, flexGrow: 10, padding: METRICS.halfMargin }
});

export default styles;
