import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppNavigation, RootStackParamList } from '@shared/config/navigation';
import { COLORS } from '@shared/config/theme';
import { ScreenContent } from '@shared/ui/ScreenContent';
import { Login } from '@features/auth/auth-by-email';
import { styles } from './LoginScreenStyle';
import { View } from 'react-native';

type LoginScreenType = NativeStackScreenProps<
  RootStackParamList,
  AppNavigation.WELCOME
>;

export const LoginScreen = ({ navigation }: LoginScreenType) => {
  return (
    <ScreenContent
      backgroundColor={COLORS.white}
      navigation={navigation}
      navigationOptions={{ headerShown: false }}
    >
      <View style={styles.container} >
        <Login />
      </View>
    </ScreenContent>
  );
};
