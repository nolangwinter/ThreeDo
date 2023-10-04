import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from './AppContext'
import Home from './screens/FrontPage';
import Add from './screens/Add';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import TaskScreen from './screens/TaskScreen';

const Stack = createStackNavigator();
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState('');
  const [completedTask, setCompletedTask] = useState('')
  const [duration, setDuration] = useState(0);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), date_added: Date("MM-DD-YYYY"), value:task , dur:duration }]);
    setTask('');
  };

  const addCompletedTask = (newTask) => {
    setCompletedTasks([...completedTasks, { id: Date.now(), date_completed: Date("MM-DD-YYYY"), value: task, dur:duration}]);
    setCompletedTask('');
    removeTask(newTask.id);
  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    setTask,
    setDuration,
    setCompletedTask,
    setCompletedTasks,
    addCompletedTask
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add}/>
          <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
export default App;
