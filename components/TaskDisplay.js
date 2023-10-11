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
                <Pressable onPress={() => context.removeTask(task.id)}>
                    <Text style={styles.deleteButton}>X</Text>
                </Pressable>
            )
        } else {
            return (
                <AntDesign name="check" size={24} color="green" />
            )
        }
    }
    return (
        <View style={{ borderColor: 'grey',
        borderWidth: 1, padding: 10, marginVertical: 10, }}>
            <View style={styles.listItem}>
                <Text style={styles.taskVal}>{ task.value }</Text>
                <Text style={styles.durStyle}>{task.dur}</Text>
                {xOrCheck()}
            </View>

            <View>
                <Text style={styles.date}>{isComplete()}</Text>
            </View>

        </View>

    )
}

export default TaskDisplay

const styles = StyleSheet.create({
    taskVal: {
        color:"black",
        fontSize:18,
        fontWeight:"bold",
        width:'70%'
    },
    date: {
        color:"grey",
        fontSize:14,
        fontWeight:"bold",  
    },
    durStyle: {
        color:"black",
        fontSize:18,
        fontWeight:"bold",
        width:'10%' 
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteButton: {
        color:"red",
        fontSize:22,
        marginRight:5
    }
})