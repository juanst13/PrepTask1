import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import AccountStack from './AccountStack'
import IncomeStack from './IncomeStack'
import ExpensesStack from './ExpensesStack'

const Tab =  createBottomTabNavigator()

export default function Navigation() {

    const ScreenOptions = (route, color) => {
        let iconName

        switch (route.name){

            case "income":
                iconName = "bank-plus"
                break
            case "expenses":
                iconName = "bank-minus"
                break
            case "account":
                iconName = "account"
                break
        }
        return(
            <Icon
                type = "material-community"
                name = {iconName}
                size = {22}
                color = {color}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "income"
                tabBarOptions = {{
                    inactiveTintColor: "#638494",
                    activeTintColor: "#2cbcc4"
                }}
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ color }) => ScreenOptions(route, color)
                })}
            >
                <Tab.Screen
                    component = {IncomeStack}
                    name = "income"
                    options = {{ title: "Ingresos" }}
                />
                <Tab.Screen
                    component = {ExpensesStack}
                    name = "expenses"
                    options = {{ title: "Gastos" }}
                />
                <Tab.Screen
                    component = {AccountStack}
                    name = "account"
                    options = {{ title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
