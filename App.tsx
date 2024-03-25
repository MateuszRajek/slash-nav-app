import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as NavigationComponent } from './src/navigation/index';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return <NavigationComponent />;
}

export default App;
