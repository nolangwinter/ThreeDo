import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import AppContext from '../AppContext'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditScreen = ({navigation}) => {
    const context =  useContext(AppContext);
    const route = useRoute();
    const [editedTask, setEditedTask] = useState(route.params.item.item.value);
    const [editedDur, setEditedDur] = useState(route.params.item.item.dur);

    const editFullTask = () => {
        taskEdited = context.tasks.map((task) => {
            updatedTask = null;
            if (task.id === route.params.item.item.id) {
                updatedTask = {... task, value: editedTask, dur: editedDur};
                return {... task, value: editedTask, dur: editedDur}
            }
            return task;
        })
        context.setTasks(taskEdited);
    }
    return (
    <View>
        <View style={{flexDirection:"row", marginTop:20}}>
            <Text style={styles.taskTitle}>Task:</Text>
            <TextInput
                // clearTextOnFocus= {true}
                clearButtonMode="always"
                defaultValuer={editedTask}
                onChangeText={setEditedTask}
                value={editedTask}
                style={styles.taskInput}
            />
        </View>

        <View style={{flexDirection:"row", marginTop:20}}>
            <Text style={styles.durTitle}>Duration:</Text>
            <TextInput
                // clearTextOnFocus={true}
                clearButtonMode="always"
                defaultValue={editedDur}
                onChangeText={setEditedDur}
                value={editedDur}
                style={styles.durInput}
            />
        </View>

        <View style={{height:450}}/>

        <Pressable style={styles.button} onPress={() => {editFullTask(); navigation.navigate("Task", {item: updatedTask})}}>
            <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
    </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    taskInput: {
        width:"60%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        fontSize:16,
        marginBottom:10,
    },
    durInput: {
        width:"30%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        fontSize:16,
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
        fontSize:22
    },
    taskTitle: {
        fontSize:30,
        marginRight:60,
        marginLeft:10,
        marginTop:8
    },
    durTitle: {
        fontSize:30,
        marginRight:10,
        marginLeft:10,
        marginTop:8
      },
    
})