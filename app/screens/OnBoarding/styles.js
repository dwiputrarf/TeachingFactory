import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_FONT_PRIMARY_DARK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';

const styles = StyleSheet.create({
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
