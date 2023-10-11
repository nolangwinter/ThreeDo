import { StyleSheet, Text, View, SafeAreaView, Button, Pressable } from 'react-native'
import React, {useContext} from 'react'
import AppContext from '../AppContext'
import { TextInput } from 'react-native-gesture-handler';

const Add = ({navigation}) => {
    const context = useContext(AppContext);
  return (
    <View style={{flex:1}}>
      <Text style={styles.label}>Add Task</Text>
      <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center", marginVertical:10}}>
        <TextInput
              placeholder={(context.tasks.length == 0) ? "Add your first task" : "Add another task"}
              style={styles.input}
              onChangeText={context.setTask}
              value={context.task}
        />
        <TextInput
          placeholder="Enter Duration"
          style={styles.durInput}
          onChangeText={context.setDuration}
          value={context.duration}
        />

      </View>

      <View style={{position:'absolute', bottom:50, marginLeft:120}}>
      <Pressable style={styles.addButton} onPress={() => {context.addTask(context.task); navigation.goBack()}}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <Pressable style={styles.canButton} onPress={() => {navigation.goBack()}}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      </View>

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
        width:"95%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        fontSize:18,
        marginBottom:10,
    },
    durInput: {
      width:"40%",
      borderColor:"black",
      borderWidth:1,
      height:60,
      padding:10,
      fontSize:18,
      marginTop:10
    },
    addButton: {
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
    canButton: {
      backgroundColor: "#ff3333",
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