import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN, COLOR_BASE_TERTIARY_LIGHT } from '../../styles';
import { heightByScreen } from '../../utils/dimensions';

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
  }
});

export default styles;
