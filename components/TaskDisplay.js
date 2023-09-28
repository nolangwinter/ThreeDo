import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../AppContext'


const TaskDisplay = ({ task, navigation }) => {
    const context = useContext(AppContext);
    return (
        <View style={styles.listItem}>
            <Text style={styles.taskVal}>{task.value}</Text>
            <Text style={styles.taskVal}>{task.dur}</Text>
            <Button title="X" onPress={() => context.removeTask(task.id)} />
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