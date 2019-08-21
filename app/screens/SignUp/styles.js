import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
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
  haveAccount: { fontSize: 16, marginTop: METRICS.baseMargin },
  margin: { marginBottom: METRICS.doubleBaseMargin },
  outlined: { backgroundColor: COLOR_WHITE, borderColor: COLOR_BASE_PRIMARY_MAIN, borderWidth: 2 },
  outlinedText: { color: COLOR_BASE_PRIMARY_MAIN },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: METRICS.doubleSection
  },
  appDetails: { flexDirection: 'column', marginTop: METRICS.doubleBaseMargin }
});

export default styles;
