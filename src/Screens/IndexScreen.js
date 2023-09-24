import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
// import { Context as ImageContext} from '../context/ImageContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Button
        title='Add Blog'
        onPress={addBlogPost}
      // onPress={() => addBlogPost()}
      />
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowBlog', {id: item.id})}
            >
              <View style={styles.row}>

                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = () => {
  
  return {
    headerRight: () => (
      <Button
        title="Post"
        color='green'
        onPress={() => {navigation.navigate('CreateBlogScreen') }}
      />
    ),
  };
};

export default IndexScreen 

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})