import { StyleSheet, Platform } from 'react-native';
import {
  COLOR_WHITE,
  FONT_HEADLINE5_PRIMARY,
  COLOR_BLACK,
  COLOR_BASE_PRIMARY_DARK,
  FONT_SUBTITLE1_SECONDARY,
  FONT_BODY2_PRIMARY
} from '../../styles';
import METRICS from '../../constants/metrics';
import { heightByScreen } from '../../utils/dimensions';

const borderRadius = 5;

const styles = StyleSheet.create({
  container: { backgroundColor: COLOR_WHITE },
  cardContainer: {
    backgroundColor: COLOR_WHITE,
    marginHorizontal: METRICS.doubleBaseMargin,
    marginVertical: METRICS.baseMargin,
    borderRadius,
    shadowColor: COLOR_BLACK,
    shadowOpacity: Platform.OS === 'android' ? 0.8 : 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: borderRadius,
    elevation: 2
  },
  information: {
    width: METRICS.screenWidth - 2 * METRICS.doubleBaseMargin,
    padding: METRICS.baseMargin
  },
  title: { ...FONT_HEADLINE5_PRIMARY, color: COLOR_BASE_PRIMARY_DARK },
  imageContainer: { height: heightByScreen(20) - METRICS.baseMargin, width: METRICS.screenWidth },
  image: { flex: 1, width: undefined, height: undefined },
  imagesFound: {
    width: METRICS.screenWidth * 0.4,
    height: METRICS.screenWidth * 0.4
  },
  containerFound: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    flex: 1,
    justifyContent: 'center'
  },
  containerImgFound: {
    marginTop: METRICS.doubleBaseMargin * 5,
    marginBottom: METRICS.doubleBaseMargin * 1.5
  },
  txtTitleFound: {
    ...FONT_SUBTITLE1_SECONDARY,
    textAlign: 'center',
    color: COLOR_BLACK
  },
  txtDescFound: {
    textAlign: 'center',
    ...FONT_BODY2_PRIMARY,
    paddingTop: METRICS.baseMargin
  },
  textFound: {
    marginVertical: METRICS.doubleBaseMargin
  }
});

export default styles;
