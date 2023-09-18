import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from './AppContext'
import Home from './screens/FrontPage';
import Add from './screens/Add';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    console.log("adding ",newTask)
  };
  const removeTask = (taskId) => {
  console.log("removing ",taskId);
  };
  const contextValue = {
    tasks,
    addTask,
    removeTask
  };
  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
export default App;
