import React from 'react';

import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* <AppStack />
        <Navigation /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
