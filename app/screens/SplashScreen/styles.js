import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_BLACK },
  appVersion: { fontSize: 14 }
});

export default styles;
