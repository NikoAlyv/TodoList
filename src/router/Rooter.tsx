import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TodoListScreen} from '../screens/TodoList.screen';
import {CompletedTasksScreen} from '../screens/CompletedTasks.screen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
export const Rooter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="CompletedTasks" component={CompletedTasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
