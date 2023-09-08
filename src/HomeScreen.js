import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.testStayle}>Home screen </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    testStayle: {
        fontSize: 30,
        backgroundColor: 'green'
    }
})