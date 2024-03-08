import React from 'react';

import { SafeAreaView } from 'react-native';
import Navigation from './src/screens/Navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
