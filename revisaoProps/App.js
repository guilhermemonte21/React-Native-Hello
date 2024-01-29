import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Person from './src/components/Person/Person';
import { FlatList } from 'react-native';
import Gamer from './src/components/Gamer'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

const peopleList = [
  {id: '1', name: 'God of War', prize: 180,empresa:'Santa Monica'},
  {id: '2', name: 'Horizon', prize: 120, empresa:'Ubisoft'},
  {id: '3', name: 'Fifa', prize: 145, empresa: 'EA'},
]


  // const peopleList = [
  //   {id: '1', name: 'Gui', age: 18},
  //   {id: '2', name: 'Guigui', age: 12},
  //   {id: '3', name: 'Guizao', age: 45},
  // ]

  export default function App() {
    let [fontsLoaded] = useFonts({
      Poppins_100Thin,
      Poppins_100Thin_Italic,
      Poppins_200ExtraLight,
      Poppins_200ExtraLight_Italic,
      Poppins_300Light,
      Poppins_300Light_Italic,
      Poppins_400Regular,
      Poppins_400Regular_Italic,
      Poppins_500Medium,
      Poppins_500Medium_Italic,
      Poppins_600SemiBold,
      Poppins_600SemiBold_Italic,
      Poppins_700Bold,
      Poppins_700Bold_Italic,
      Poppins_800ExtraBold,
      Poppins_800ExtraBold_Italic,
      Poppins_900Black,
      Poppins_900Black_Italic,
    });
  
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
  return (
    <SafeAreaView>

      {/* <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ( <Person name={item.name} age={item.prize} empresa={item.e} />
      )} */}
      
      
      <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ( <Gamer name={item.name} preco={item.prize} empresa={item.empresa} />)}
      />

      <StatusBar style="autor" />
    </SafeAreaView>
      

  );
      }}
