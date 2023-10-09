import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { AntDesign } from '@expo/vector-icons';


const TaskDisplay = ({ task, navigation }) => {
    const context = useContext(AppContext);

    const isComplete = () => {
        if (task.date_completed === null) {
            return task.date_added
        } else {
            return task.date_completed
        }
    }

    const xOrCheck = () => {
        if (task.date_completed === null) {
            return (
                <Button title="X" onPress={() => context.removeTask(task.id)} />
            )
        } else {
            return (
                <AntDesign name="check" size={24} color="blue" />
            )
        }
    }
    return (
        <View style={styles.listItem}>
            <Text style={styles.taskVal}>{task.value}</Text>
            <Text style={styles.taskVal}>{task.dur}</Text>
            <Text style={styles.taskVal}>{isComplete()}</Text>
            {xOrCheck()}
        </View>

    )
}

export default TaskDisplay

const styles = StyleSheet.create({
    taskVal: {
        color:"green",
        fontSize:20,
        fontWeight:"bold",
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
})