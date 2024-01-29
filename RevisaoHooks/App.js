import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  //hook de state
  const [count, setCount] = useState(0)

    //funcao parz incremento
    const increment = () => {
      setCount(count + 1)
    }

    //funcao para decremento
    const decrement = () => {
      setCount(count - 1)
    }

    useEffect(() =>{
      console.warn(`Contador atualizado : ${count}`)
    }, [count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>contador: {count}</Text>
    
    <TouchableOpacity style={styles.btn1} onPress={increment}>
      <Text>Incrementar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={decrement}>
      <Text>Decrementar</Text>
    </TouchableOpacity>
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },
  btn: {
    backgroundColor:'red',
    width:180,
    height:40,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  btn1: {
    backgroundColor:'green',
    width:180,
    height:40,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
  
});
