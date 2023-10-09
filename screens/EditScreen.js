import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import AppContext from '../AppContext'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditScreen = ({navigation}) => {
    const context =  useContext(AppContext);
    const route = useRoute();
    const [editedTask, setEditedTask] = useState('');

    const editTaskValue = () => {
        console.log("before the change");
        console.log(context.tasks);
        // route.params.item.item.value = editedTask
        // fullEditedTask = route.params.item.item
        // console.log(fullEditedTask);
        taskEdited = context.tasks.map((task) => {
            if (task.id === route.params.item.item.id) {
                return {...task, value: editedTask}
            }
            return task;
        })
        console.log(taskEdited);
        context.setTasks(taskEdited);
        
    }
    return (
    <View>
        <View>
            <Text>{route.params.item.item.value}</Text>
        </View>

        <TextInput
            placeholder={route.params.item.item.value}
            onChangeText={setEditedTask}
            value={editedTask}
            style={styles.input}
        />
        <Pressable style={styles.button} onPress={() => {editTaskValue(); navigation.navigate("Task", {item: item} )}}>
            <Text style={styles.buttonText}>edit</Text>
        </Pressable>
    </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    input: {
        width:"65%",
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
        fontSize:20
      }
})