import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
    <Tabs.Screen name="index" options={{headerShown: false}} />
    <Tabs.Screen name="Register" options={{headerShown: false}} />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})