import { Text, View } from 'react-native';

export const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ color: '#000' }}>로그인 화면</Text>
    </View>
  );
};
