//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Task = (props) => {
    return (
        <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View> 
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemCircle}></View>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height:3},
        shadowOpacity: 0.25,
        shadowRadius: 5,  
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
      itemText: {
        maxWidth: '80%',
      },
      itemCircle: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },
    });

//make this component available to the app
export default Task;
