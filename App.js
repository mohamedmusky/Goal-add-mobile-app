import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList,Modal } from 'react-native';
import GoalItems from './GoalItems';
import Goalinput from './Goalinput';

export default function App() {


  const [goals, setGoals]= useState([]);
  [isModalVisible, setIsModalVisible]=useState(false);

  function addGoalInput( goal){
    setGoals((currentGoals)=>[...currentGoals,goal])
      
  }

  

  function deleteItem(index){
    console.log('delete item'+index)

    const newGoal=goals.filter((el,i)=> i!=index)
    setGoals(newGoal);
  }

  function startAddGoalHandler(){
      setIsModalVisible(true);
  }

  function closeGoalHandler(){

    setIsModalVisible(false);
}
  return (

<View style={styles.home}>
    <View style={styles.appcontainer}>
  
  <Button title='Add New Goal' color="blue" onPress={startAddGoalHandler}/>
     <Goalinput visible={isModalVisible} onAddGoal={addGoalInput} onClose={closeGoalHandler}/>
    <View>
     <FlatList data={goals} renderItem={(itemData)=>{
    return(

      <GoalItems  text={itemData.item} onDelete={()=>deleteItem(itemData.index)}/>
       
       )} }/> 
</View>    
   
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    padding:50,
    paddingTop:50,
    backgroundColor:'#1A0037',
    
  },
  home:{
    borderWidth:2,
    borderColor:"yellow",
  }
 
 
});
