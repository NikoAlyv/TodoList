import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TodoListScreen} from '../screens/TodoList.screen';
import {CompletedTasksScreen} from '../screens/CompletedTasks.screen';
import {NavigationContainer} from '@react-navigation/native';

// enum
enum ScreenNames {
  TodoList = 'TodoList',
  CompletedTasks = 'CompletedTasks',
}

const Stack = createStackNavigator();
export const Rooter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.TodoList}>
        <Stack.Screen name={ScreenNames.TodoList} component={TodoListScreen} />
        <Stack.Screen
          name={ScreenNames.CompletedTasks}
          component={CompletedTasksScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
