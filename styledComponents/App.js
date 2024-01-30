import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { BtnDecrement, BtnIncrement } from './src/components/Button/Button';
import { Title } from './src/components/Title/Title';
import { Image } from './src/components/Img/Image';


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
    <Container>
      {/* Title */}
      <Title>contador: {count}</Title>
    
    <View style={{flexDirection:"row"}}>
    {/* BtnIncrement */}
    <BtnIncrement onPress={increment}>

      {/* TxtBtnIncrement */}
      <Title>Incrementar</Title>

    </BtnIncrement>

    {/* BtnDecrement */}
    <BtnDecrement  onPress={decrement}>

      {/* TxtBtnDecrement */}
      <Title>Decrementar</Title>

    </BtnDecrement>
    </View>
    <Image
       
        source={{uri: 'https://f.i.uol.com.br/fotografia/2021/06/30/162508978660dce6fa8db97_1625089786_3x2_md.jpg',}}
      />

    
    

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  
  // btn: {
  //   backgroundColor:'red',
  //   width:180,
  //   height:40,
  //   borderRadius:8,
  //   alignItems: 'center',
  //   justifyContent: 'center',
    

  // },
  // btn1: {
  //   backgroundColor:'green',
  //   width:180,
  //   height:40,
  //   borderRadius:8,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   color:'white',
  //   fontSize:20,
  //   fontWeight:'bold'
  // }
  
});
