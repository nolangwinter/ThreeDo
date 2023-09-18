import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import AppContext from '../AppContext'
import { TextInput } from 'react-native-gesture-handler';

const Add = ({navigation}) => {
    const context = React.useContext(AppContext);
  return (
    <View>
      <Text style={styles.label}>Add Task</Text>
      <TextInput
            placeholder={(context.tasks.length == 0) ? "Add your first task" : "Add another task"}
            style={styles.input}
            onChangeText={context.setTask}
            value={context.tasks}/>
      <Button title="Cancel" onPress={() => {navigation.goBack()}}/>
      <Button title='Add' onPress={() => {context.addTask('foo'); navigation.goBack()}}/>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    screen: {
        padding:50,
    },
    label: {
        color:"black",
        fontSize:20,
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
      },
})