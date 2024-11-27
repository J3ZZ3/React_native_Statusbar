import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {createContext, useContext} from 'react'

const RadioContext = createContext();



const RadioButton = ({value, label}) => {

    const {selectedValue, setSelectedValue} = useContext(RadioContext);

  return (
    <Pressable  
           style={{flexDirection: 'row',
            gap: 10}}
            onPress={() => setSelectedValue(value)}>
            <View 
            style={{
            borderWidth: 2, 
            borderColor: selectedValue === value ? '#BDBDBD' : '#000000', 
            borderRadius: 5,
            height: 20,
            width: 20,
            }}>
                {
                selectedValue === value && <View style={{width: 16, height: 16, backgroundColor: '#BDBDBD', borderRadius: 5}}/>
            }
                </View>
            <Text style={{color: selectedValue === value ? '#000000' : '#000000', fontSize: 16}}>{label}</Text>
            </Pressable>
  )
}

const RadioGroup = ({children, groupName, selectedValue, setSelectedValue}) => {
    return (
        <RadioContext.Provider value={{selectedValue, setSelectedValue}}>
            <Text style={{color: "white",fontSize: 24,fontWeight: "700",marginTop: 20,textAlign: "center",alignItems: "center"}}>{groupName}</Text>
    <View style={{gap: 10}}>
    {children}
    </View>
        </RadioContext.Provider>
    )
}

export {RadioGroup, RadioButton}