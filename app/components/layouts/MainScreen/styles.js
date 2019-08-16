import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE } from '../../../styles';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  containerInScrollView: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  contentContainerStyle: {
    flex: 1
  },
  text: {
    fontSize: 20
  }
});

export default styles;
