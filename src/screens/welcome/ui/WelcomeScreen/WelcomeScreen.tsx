import { AppNavigation, RootStackParamList } from '@shared/config/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '@shared/config/theme';
import { ScreenContent } from '@shared/ui/ScreenContent';

/**
 * Welcome
 * @returns
 */

type WelcomeScreenType = NativeStackScreenProps<
  RootStackParamList,
  AppNavigation.WELCOME
>;

export const WelcomeScreen = ({ navigation }: WelcomeScreenType) => {
  const COUNT_TIME = 3000;

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigation.navigate(AppNavigation.LOGIN);
    }, COUNT_TIME);

    return () => clearTimeout(redirect);
  }, [navigation]);

  return (
    <ScreenContent
      backgroundColor={COLORS.white}
      navigation={navigation}
      excludeEdges={['top']}
      navigationOptions={{ headerShown: false }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Text style={{ color: '#000' }}>오늘의 일본어</Text>
      </View>
    </ScreenContent>
  );
};
