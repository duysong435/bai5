import React from 'react'
import { Text, View } from 'react-native'

export default function Square(props) {
  return (
    <View style={{
      height: 50,
      width: 50,
      backgroundColor: props.color,
      marginHorizontal: 10,
      justifyContent: 'center'
    }}>
      <Text style={{ 
        textAlign : 'center',
        // paddingTop: 15
      }}>{props.name}</Text>
    </View>
  )
}
