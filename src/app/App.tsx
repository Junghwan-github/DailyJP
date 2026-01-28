/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigation } from './navigation';

function App() {

  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}

export default App;
