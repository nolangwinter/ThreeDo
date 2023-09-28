import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../AppContext'


const TaskDisplay = ({ task }) => {
    const context = useContext(AppContext);
    return (
        <View style={styles.listItem}>
            <Text style={styles.taskVal}>{task.value}</Text>
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