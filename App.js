import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IconList from './src/components/IconList';
import IconFamilyList from './src/components/IconFamilyList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IconFamilyList" component={IconFamilyList} />
        <Stack.Screen name="IconList" component={IconList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
