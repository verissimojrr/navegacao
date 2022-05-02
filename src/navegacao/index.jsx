import { StatusBar } from 'expo-status-bar'
import React from 'react' 
import { SafeAreaView, StyleSheet } from 'react-native'
//import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack'

export default props => {
    return (
        <SafeAreaView style={{flex:1}}>
            {/*<NavigationContainer>*/}
                <Stack/>
            {/*</NavigationContainer>*/}
            {/*<TextoCentral>Olá App Novo!!</TextoCentral>*/}
            {/*<StatusBar style="auto" />*/}
        </SafeAreaView>
    )
}

/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })*/