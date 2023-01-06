import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home