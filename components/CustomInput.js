import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({name, onChange, error = 'Invalid Input'}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TextInput style={[styles.input, error && {borderColor: '#89382C'}]} 
      placeholder={name} 
      placeholderTextColor={'#717171'}
      onChangeText={(text) => {onChange(text)}}/>
      {
        error && (
          <Text style={styles.error}>Invalid Input</Text>
        )
      }
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 20,
        textAlign: "center",
        alignItems: "center",
      },
      input: {
        backgroundColor: "black",
        color: "white",
        padding: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        marginTop: 10,
      },
      error: {
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 10
      }
})