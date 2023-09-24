import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const HeaderLogo = ({ name }) => {
    return (
        <View>
            <Feather name={name} size={30} />
        </View>
    )
}

export default HeaderLogo

const styles = StyleSheet.create({})