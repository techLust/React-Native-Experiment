import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogContext'


const ShowBlogScreen = () => {
    const { state } = useContext(Context)

    const route = useRoute();
    const id = route.params.id;

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>Id: {blogPost.id}</Text>
            <Text>Title: {blogPost.title}</Text>
            {/* <Image
                source={require('../../assets/e-zone.png')}
            /> */}
        </View>
    )
}

export default ShowBlogScreen

const styles = StyleSheet.create({})