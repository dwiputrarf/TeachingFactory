import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_TERTIARY_LIGHT,
  COLOR_BLACK,
  FONT_HEADLINE6_PRIMARY,
  COLOR_BASE_PRIMARY_DARK,
  FONT_CAPTION_PRIMARY,
  COLOR_FONT_LINK
} from '../../styles';
import { heightByScreen, widthByScreen } from '../../utils/dimensions';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const itemHeight = heightByScreen(32.8);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR_WHITE
  },
  slide: {
    height: itemHeight
  },
  slideInnerContainer: {
    backgroundColor: COLOR_WHITE,
    height: itemHeight
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  dotStyle: {
    width: 13,
    height: 7,
    borderRadius: 7,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  activeDot: {
    backgroundColor: COLOR_BASE_TERTIARY_LIGHT,
    width: 7
  },
  logoContainer: { width: scale(50), height: scale(50) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  cardMenu: {
    alignItems: 'center',
    width: widthByScreen(30),
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    shadowColor: COLOR_BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    elevation: 4,
    margin: METRICS.baseMargin / 2,
    padding: METRICS.baseMargin
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: METRICS.baseMargin,
    marginVertical: METRICS.doubleBaseMargin
  },
  title: {
    flex: 1,
    ...FONT_HEADLINE6_PRIMARY,
    fontWeight: 'bold',
    color: COLOR_BASE_PRIMARY_DARK,
    textAlign: 'left'
  },
  seeMore: {
    ...FONT_CAPTION_PRIMARY,
    color: COLOR_FONT_LINK
  },
  cardProduct: {
    flexDirection: 'column',
    alignItems: 'center',
    width: widthByScreen(25),
    height: widthByScreen(30),
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    shadowColor: COLOR_BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    elevation: 4,
    margin: METRICS.baseMargin / 2,
    padding: METRICS.baseMargin
  }
});

export default styles;
