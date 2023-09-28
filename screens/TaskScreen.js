import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const TaskScreen = ({route, navigation}) => {
    const item = route.params;
    console.log(item);
  return (
    <SafeAreaView>
      <View style={{alignItems:"center"}}>
        <Text style={styles.taskTitle}>{item.value}</Text>
      </View>
    </SafeAreaView>
  )
}

export default TaskScreen

const styles = StyleSheet.create({
    taskTitle: {
        fontSize:30,
        fontWeight:"bold",
        color:"black",
    }
})