import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from 'src/navigation/AppStack/navigationTypes';

type HomeScreenPropsType = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ navigation }: HomeScreenPropsType) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Text style={{ color: 'red' }}>Home Screen</Text>
      <Text
        style={{ color: 'red' }}
        onPress={() => navigation.navigate('Navigation')}>
        Navigation Screen
      </Text>
    </View>
  );
}

export default HomeScreen;
