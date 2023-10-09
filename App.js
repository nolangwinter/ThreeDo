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
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [duration, setDuration] = useState(0);

  const addTask = (newTask) => {
    const date = new Date();
    setTasks([...tasks, { id: Date.now(), date_added: date.toLocaleDateString(), value:task, dur:duration, date_completed:null }]);
    setTask('');
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    setTask,
    setTasks,
    setDuration,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add}/>
          <Stack.Screen name="Task" component={TaskScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
export default App;
