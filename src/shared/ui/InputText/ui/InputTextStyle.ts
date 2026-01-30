import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    gap: moderateScale(5),
  },
  wrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    padding: moderateScale(15),
    borderBottomWidth: 1,
  }
});
