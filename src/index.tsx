import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const Home  = ()=>{
  const [valueA, setValueA] = useState('0')
  const [valueB, setValueB] = useState('0')
  const [result, setResult] = useState(0)
 
  const calculeValue = ()=>{
    setResult(Number(valueA) + Number(valueB))
  }

  return(
    <View>
      <Text testID="welcome">Welcome</Text>
      <TextInput 
        placeholder="valor-a" 
        value={valueA} 
        keyboardType="number-pad" 
        onChangeText={(text)=> setValueA(text)} 
      />
      <TextInput 
        placeholder="valor-b" 
        value={valueB} 
        keyboardType="number-pad" 
        onChangeText={(text)=> setValueB(text)} 
      />
      <Button onPress={calculeValue} title="Calcular"/> 
    </View>
  )
}
export default Home