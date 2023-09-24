import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const {state} = useContext(Context)

    const [ input, setInput] = useState({
      title: '',
      content: '',
    })

  const addPost = () => {
    console.log(input)
  }

  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput 
      value={input.title}
      onChangeText={text => setInput(prev => ({...prev, title}))}
      />
      <Text>Enter Content</Text>
      <TextInput
      value={input.content}
      onChangeText={text => setInput(prev => ({...prev, content}))}

      />
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({})