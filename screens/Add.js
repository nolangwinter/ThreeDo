import { StyleSheet, Text, View, SafeAreaView, Button, Pressable } from 'react-native'
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
      <Pressable style={styles.button} onPress={() => {context.addTask('foo'); navigation.goBack()}}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      {/* <Button title="Cancel" onPress={() => {navigation.goBack()}}/> */}
      <Pressable style={styles.button} onPress={() => {navigation.goBack()}}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      {/* <Button title='Add' onPress={() => {context.addTask('foo'); navigation.goBack()}}/> */}
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
        fontSize:25,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        padding:10,
        fontWeight:"bold",

    },
    input: {
        width:"100%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        fontSize:20,
        marginBottom:10,
      },
    button: {
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
    },
    buttonText: {
      fontSize:20
    }
})