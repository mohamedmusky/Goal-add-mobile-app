import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const GoalItems = (props) => {
  return (
   
    <View style={styles.goalItems}>

    < Pressable /* android_ripple={{color:'aqua'}} */  onPress={props.onDelete} style={({pressed})=> pressed && styles.pressedItem}> 
    <Text style={styles.goalText}>{props.text}</Text>

    </Pressable>
    </View>

  )
}

export default GoalItems

const styles = StyleSheet.create({
    goalItems:{
       
        borderRadius:6,
        backgroundColor:'blue',
        marginTop:10
       
    
      },
      goalText:{
        color:'white', 
        padding:5,
        margin:8,
      },
      pressedItem:{
      
        backgroundColor:'yellow',
        color:'#123356 '
      }
})