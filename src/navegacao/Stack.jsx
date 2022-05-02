import React from 'react'
//import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'


import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

//const Stack = createStackNavigator()
const Stack = createNativeStackNavigator()

export default props => {
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="TelaA"
        screenOptions={{headerShown: true}}
        >
            <Stack.Screen 
            name="TelaA" 
            compoment={TelaA}
            options={{title: 'Informacoes iniciais'}}
            />
            <Stack.Screen name="TelaB" compoment={TelaB}/>
            <Stack.Screen name="TelaC" compoment={TelaC}/>
        </Stack.Navigator>
    </NavigationContainer>
}