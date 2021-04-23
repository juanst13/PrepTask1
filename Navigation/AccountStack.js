import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../Screen/Account'

const Stack = createStackNavigator()

export default function stackAccount() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "account"
                component = {Account}
                options = {{ title: "Cuenta" }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
