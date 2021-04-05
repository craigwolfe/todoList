import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard,ScrollView } from 'react-native';
import Task from './Task'

export default function MainTask() {
  const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]); 

const handleAddTask = () =>{
  Keyboard.dismiss();
setTaskItems([...taskItems,task])
setTask(null);
}
const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy)
}

  return (
    <View style={styles.container}>
         <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      {/* Today's task */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}> Today's Task</Text>
        <View style={styles.items}>
        {/* This is where the tasks will go! */}
        {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
       </View>
      </View>
      </ScrollView>
      {/* create a write a task */}
    {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:60,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:3},
    shadowOpacity: 0.25,
    shadowRadius: 5,  
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{

  }
});
