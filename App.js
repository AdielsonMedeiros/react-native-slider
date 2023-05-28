
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


export default function App() {

  const [status,setStatus] = useState(false)



  return (
    <View style={styles.container}>
       <Switch value={status} 
       onValueChange={ (valorSelecionado) => setStatus(valorSelecionado)}
       //mudar a cor visual
      trackColor={{ false: '#121212', true: '#00ff00'}}
      thumbColor={status ? "#121212" : '#f4f4f4'} />
      <Text style={{textAlign: 'center', fontSize: 25}}>status: {status ? 'ATIVO' : 'INATIVO'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
    backgroundColor:'#ddd'
  },
});
