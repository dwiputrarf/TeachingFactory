import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_FONT_PRIMARY_DARK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  imageContainer: {
    width: scale(200),
    height: scale(200)
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  header: {
    color: COLOR_BASE_PRIMARY_MAIN,
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15
  },
  text: {
    color: COLOR_FONT_PRIMARY_DARK,
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center'
  }
});

export default styles;
