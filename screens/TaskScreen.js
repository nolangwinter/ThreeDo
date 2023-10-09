import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, {useContext} from 'react'
import AppContext from '../AppContext'

const TaskScreen = ({route, navigation}) => {
    const context = useContext(AppContext);
    const item = route.params;
    console.log(item);
  return (
    <SafeAreaView>
      <View style={{alignItems:"center"}}>
        <Text style={styles.taskTitle}>{item.item.value}</Text>
        <Text style={styles.taskTitle}>Duration: {item.item.dur}</Text>
        <Text>Date Added: {item.item.date_added}</Text>
      </View>

      <View style={{height:200}}/>

      <View style={styles.buttonView}>
        <Pressable onPress={() => {context.addCompletedTask(item.item); navigation.goBack()}} style={styles.completedButton}>
          <Text style={styles.buttonText}>
            Completed
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Edit", {item: item})} style={styles.editButton}>
          <Text style={styles.buttonText}>
            Edit
          </Text>
        </Pressable>
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
  },
  buttonView: {
    flexDirection:"row",
    justifyContent:"space-between",
  },
  completedButton: {
    backgroundColor:"green",
    padding:10,
    marginLeft:30,
    width: 150,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height:50,
  },
  editButton:{
    backgroundColor:"yellow",
    padding:10,
    marginRight:30,
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