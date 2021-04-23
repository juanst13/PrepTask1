import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Incomes from '../Screen/Incomes'

const Stack = createStackNavigator()

export default function IncomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component = {Incomes}
                name = "income"
                options = {{ title: "Ingresos" }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
