import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
import Einstein from './component/Einstein'
import Elon from './component/Elon'
import Tesla from './component/Tesla'
import {Button} from 'react-native-paper'

export default function App () {
  const quotes = Array(<Einstein />, <Elon />, <Tesla />)
  const [quote, setQuote] = useState(quotes[0])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>{quote}</View>

      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => setQuote(quotes[0])}
          mode='contained'
          style={{flex: 1}}>
          Einstein
        </Button>

        <Button
          onPress={() => setQuote(quotes[1])}
          mode='contained'
          style={{flex: 1}}>
          Elon
        </Button>

        <Button
          onPress={() => setQuote(quotes[2])}
          mode='contained'
          style={{flex: 1}}>
          Tesla
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 10,
  },
  container: {
    flexDirection: 'column',
    padding: 8,
  },
})