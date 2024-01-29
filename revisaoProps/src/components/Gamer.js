import { SafeAreaView, StatusBar, Text, View,StyleSheet } from "react-native";







const Gamer = ({ name, prize,empresa }) => {
    return(
        

        <View style={styles.container}>
            <Text style={styles.text}> name: {name}</Text>

            <Text style={styles.text}> preco: {prize}</Text>

            <Text style={styles.text}> empresa : {empresa}</Text>
        </View>

            
       
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      justifyContent: 'center',
      width: 200,
      
    },
  
    text: {
      fontSize: 15,
      color: 'purple',
    }
  })
export default Gamer;