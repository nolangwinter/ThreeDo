import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, Switch, Pressable} from 'react-native'
import React, { useState } from 'react'
import AppContext from '../AppContext'
import TaskDisplay from '../components/TaskDisplay';

const Home = ({navigation}) => {
  const context = React.useContext(AppContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.toggle}>
            <View style={styles.inputContainer}>
                <Pressable style={styles.addTaskButton} onPress={() => {navigation.navigate("Add")}}>
                    <Text>Add Task</Text>
                </Pressable>
                {/* <Button title="Add Task" onPress={() => {navigation.navigate("Add")}} /> */}
            </View>
            <View style={styles.container}>
                <Text style={styles.completed}>Show Completed</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
      <FlatList
        data={context.tasks}
        renderItem={({ item }) => (
            <TaskDisplay task={ item }/>
           // <View style={styles.listItem}>
            //     <Text style={styles.taskItem}>{item.value}</Text>
            //     <Button title="X" onPress={() => context.removeTask(item.id)} />
            // </View>
        )}
        keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        padding:50
    },
    inputContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10
    },
    taskItem: {
        color:"black"
    },
    toggle: {
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
      },
    completed: {
        marginLeft:10,
        fontSize:13,
        fontWeight:"bold",
        alignItems:"center",
        padding:10
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
      },
      addTaskButton: {
        backgroundColor: "#81b0ff",
        padding:10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 150,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical:10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8
      }
});