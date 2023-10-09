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
                updatedTask = {... task, value: editedTask, dur: editedDur}
                console.log(updatedTask);
                return {... task, value: editedTask, dur: editedDur}
            }
            return task;
        })
        context.setTasks(taskEdited);
    }
    return (
    <View>
        <View>
            <TextInput
                clearTextOnFocus= {true}
                defaultValuer={editedTask}
                onChangeText={setEditedTask}
                value={editedTask}
                style={styles.input}
            />
        </View>

        <View>
            <TextInput
                placeholder={route.params.item.item.dur}
                onChangeText={setEditedDur}
                value={editedDur}
                style={styles.input}
            />
        </View>

        <Pressable style={styles.button} onPress={() => {editFullTask(); navigation.navigate("Task", {item: updatedTask})}}>
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