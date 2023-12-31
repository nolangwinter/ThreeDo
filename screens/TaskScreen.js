import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, {useContext} from 'react'
import AppContext from '../AppContext'

const TaskScreen = ({route, navigation}) => {
    const context = useContext(AppContext);
    const item = route.params;

    const completeTask = (ctask) => {
      date = new Date();
      taskCompleted = context.tasks.map((task) => {
        if (task.id === ctask.id) {
          return {...task, date_completed: date.toLocaleDateString()};
        }
        return task;
      })
      context.setTasks(taskCompleted);
    }

    const dateCompl = () => {
      if (item.item.date_completed !== null) {
        return (
          <Text style={styles.taskDate}>Date Completed: {item.item.date_completed}</Text>
        )
      }
    }

    const buttons = () => {
      if (item.item.date_completed === null ) {
        return (
          <View style={styles.buttonView}>
            <Pressable onPress={() => {completeTask(item.item); navigation.goBack()}} style={styles.completedButton}>
              <Text style={styles.buttonText}>
                Complete
              </Text>
            </Pressable>
            <View style={{width:40}} />
            <Pressable onPress={() => navigation.navigate("Edit", {item: item})} style={styles.editButton}>
              <Text style={styles.buttonText}>
                Edit
              </Text>
            </Pressable>
          </View>
        )
      }
    }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{alignItems:"center"}}>
        <Text style={styles.taskTitle}>{item.item.value}</Text>
        <Text style={styles.taskDur}>Duration: {item.item.dur}</Text>
        <Text style={styles.taskDate}>Date Added: {item.item.date_added}</Text>
        {dateCompl()}
      </View>

        {buttons()}

    </SafeAreaView>
  )
}

export default TaskScreen

const styles = StyleSheet.create({
  taskTitle: {
      fontSize:30,
      fontWeight:"bold",
      color:"black",
      marginTop:20
  },
  taskDur: {
    fontSize:25,
    fontWeight:"bold",
    color:"black",
    marginTop:20
},
taskDate: {
  fontSize:20,
  fontWeight:"bold",
  color:"black",
  marginTop:20
},
  buttonView: {
    flexDirection:"row",
    justifyContent:"space-between",
    position:"absolute",
    bottom:50
  },
  completedButton: {
    backgroundColor:"#5cd65c",
    padding:10,
    marginLeft:30,
    width: 150,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height:50,
  },
  editButton:{
    backgroundColor:"#f5dd4b",
    padding:10,
    marginRight:10,
    width: 150,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height:50,
  },
  buttonText: {
    fontSize:15,
    fontWeight:"bold",
  }

})