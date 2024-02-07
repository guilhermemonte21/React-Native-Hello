import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/navegacao/navegacao';
import { Login } from './src/screens/Login/Login';
import {
  useFonts,
  MontserratAlternates_700Bold,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold
} from '@expo-google-fonts/montserrat-alternates';

import * as SplashScreen from "expo-splash-screen"
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
export default function App() {
  let [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold
    
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  //Container = envolve toda a estrutura de navegacao
  //Navigator = componente para a navegacao
  //tela
   
return(

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Navegacao"
        component={Navegacao}
        options={{ title: "Navegacao" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  </NavigationContainer>)
}
