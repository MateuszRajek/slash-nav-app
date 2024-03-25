import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Navigation from '../../screens/Navigation';
import FastImage from 'react-native-fast-image';
import SlashLogo from '../../assets/icons/slashLogo.png';
import NavIcon from '../../assets/icons/navIcon.png';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 10, height: 60 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 60,
                marginTop: -30,
                backgroundColor: '#D3D3D3',
                borderRadius: 50,
              }}>
              <FastImage
                source={SlashLogo}
                style={{ width: 45, height: 45 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 60,
                marginTop: -30,
                backgroundColor: '#D3D3D3',
                borderRadius: 50,
              }}>
              <FastImage
                source={NavIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
