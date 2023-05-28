import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {

  const [valor,setValor] = useState(50)



  return (
    <View style={styles.container}>
      <Slider minimumValue={0} maximumValue={100} value={valor}
       onValueChange={(valoSelecionado)=> setValor (valoSelecionado)}
       maximumTrackTintColor='#000FFF' minimumTrackTintColor='#FF0000' thumbTintColor='#121212'/>
      <Text style={{textAlign: 'center', fontSize: 25}}>Valor: {valor.toFixed(0)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
