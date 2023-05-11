import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PostJob from '../screens/PostJob';

const Tab = createBottomTabNavigator();

export default function Org_Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="PostJob"
        component={PostJob}
        options={{headerShown: false,
          tabBarLabel: 'PostJob',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
       
    </Tab.Navigator>
  );
}