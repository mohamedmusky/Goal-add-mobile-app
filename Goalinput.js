import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";

const Goalinput = (props) => {
  const [goal, setGoal] = useState("");

  function goalInputHandler(text) {
    setGoal(text);
  }
  function addGoalHandler() {
    props.onAddGoal(goal);
    props.onClose();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
         <Image style={styles.image} source={require('./assets/images/Goal3.jpg')}/>
         
      <View style={styles.inputcontainer}>
       
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textinput}
          placeholder="Type your goals"
        />

        <View style={styles.buttonContainar}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel " onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputcontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor:'#1A0037'
  },
  textinput: {
    borderWidth: 1,
    borderColor:'#ffffff',
    color:'#ffffff',
    width: "80%",

    padding: 8,
  },
  buttonContainar: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    marginLeft:140
  }
});
