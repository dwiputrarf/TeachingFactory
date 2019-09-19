import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_BODY2_PRIMARY, FONT_HEADLINE6_PRIMARY } from '../../../styles';
import { heightByScreen, widthByScreen } from '../../../utils/dimensions';
import METRICS from '../../../constants/metrics';
import { scale } from '../../../utils/scaling';

const height = Platform.OS === 'ios' ? 44 : 56;

export default StyleSheet.create({
  containerClose: {
    justifyContent: 'center',
    marginRight: METRICS.baseMargin
  },
  subtitleStyle: {
    ...FONT_BODY2_PRIMARY,
    color: COLOR_WHITE,
    paddingLeft: METRICS.baseMargin
  },
  titleStyle: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    paddingLeft: METRICS.baseMargin
  },
  input_search: {
    ...FONT_BODY2_PRIMARY,
    height: height * 0.8,
    flex: 1,
    alignSelf: 'center',
    paddingLeft: METRICS.baseMargin * 0.5
  },
  search_input: {
    position: 'absolute',
    right: 0,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: height * 0.7,
    alignSelf: 'center',
    borderRadius: scale(25),
    paddingLeft: METRICS.baseMargin,
    alignContent: 'center'
  },
  searchBar: {
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 0,
    height,
    position: 'absolute',
    right: 0,
    left: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center'
  },
  viewTitle: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    marginLeft: METRICS.baseMargin
  },
  icon: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  containerIcon: {
    height: widthByScreen(6),
    width: widthByScreen(6),
    justifyContent: 'center'
  },
  iconClose: {
    height: scale(15),
    width: scale(15)
  },
  container: {
    flexDirection: 'row',
    height,
    paddingHorizontal: METRICS.doubleBaseMargin * 0.8
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  leftRightContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBar: { height: heightByScreen(5) }
});
