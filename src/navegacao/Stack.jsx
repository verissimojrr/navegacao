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
    return (
        <NavigationContainer>
                <Stack.Navigator 
                initialRouteName="TelaA"
                screenOptions={{headerShown: true}}
                >
                    
                    <Stack.Screen 
                    name="TelaA" 
                    component={TelaA}
                    options={{title: 'Informacoes iniciais'}}
                    />
                    <Stack.Screen name="TelaB" component={TelaB}/>
                    <Stack.Screen name="TelaC" component={TelaC}/>
                    
                </Stack.Navigator>   
        </NavigationContainer>
    )  
}