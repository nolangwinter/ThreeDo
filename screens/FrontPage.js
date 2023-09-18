import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, Switch} from 'react-native'
import React, { useState } from 'react'
import AppContext from '../AppContext'

const Home = ({navigation}) => {
  const context = React.useContext(AppContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.toggle}>
            <View style={styles.inputContainer}>
                <Button title="Add Task" onPress={() => {navigation.navigate("Add")}} />
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
            <View style={styles.listItem}>
                <Text style={styles.taskItem}>{item.value}</Text>
                <Button title="X" onPress={() => context.removeTask(item.id)} />
            </View>
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
        fontSize:20,
        fontWeight:"bold",
    }
});