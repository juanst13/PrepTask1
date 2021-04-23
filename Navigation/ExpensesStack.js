import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import expenses from '../Screen/expenses'

const Stack = createStackNavigator()

export default function ExpensesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "expenses"
                component = {expenses}
                options = {{ options: "Gastos" }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
