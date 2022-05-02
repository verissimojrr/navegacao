import { StatusBar } from 'expo-status-bar'
import React from 'react' 
import { Text, SafeAreaView, StyleSheet } from 'react-native'

//import TextoCentral from './components/TextoCentral'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <TelaA/>
            <TelaB/>
            <TelaC/>
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