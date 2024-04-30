import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {colors} from '../theme/colors';
import {Buttons} from '../components/Buttons';
import Trash from '../assets/vectors/trash.svg';
interface TodoListScreenProps {
  navigation: any;
}

export const TodoListScreen: React.FC<TodoListScreenProps> = ({navigation}) => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const completeTask = (index: number) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Buttons onPress={addTask} text="Add task" style={styles.button} />
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <View style={styles.task}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => completeTask(index)}>
              <Trash />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Buttons
        onPress={() => navigation.navigate('CompletedTasks', {completedTasks})}
        style={styles.goToTask}
        text="Go to Task"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.orange,
  },

  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.lightGray,
    marginTop: 10,
    borderRadius: 10,
  },
  goToTask: {
    backgroundColor: colors.lightBlue,
    marginTop: 10,
  },
});
