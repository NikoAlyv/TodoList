import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const CompletedTasksScreen: React.FC<any> = ({route}) => {
  const {completedTasks} = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        renderItem={({item}) => (
          <View style={styles.task}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  task: {
    padding: 10,
    backgroundColor: colors.lightGray,
    marginTop: 10,
    borderRadius: 5,
  },
});
