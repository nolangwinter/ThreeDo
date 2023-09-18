import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import AppContext from '../AppContext'

const Add = ({navigation}) => {
    const context = React.useContext(AppContext);
  return (
    <View>
      <Text style={styles.label}>Add Task</Text>
      <Button title="Cancel" onPress={() => {navigation.goBack()}}/>
      <Button title='Add' onPress={() => {context.addTask('foo'); navigation.goBack()}}/>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    screen: {
        padding:50,
    },
    label: {
        color:"black",
        fontSize:20,
    },
})