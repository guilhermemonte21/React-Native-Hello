import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import {
  useFonts,
  MontserratAlternates_600SemiBold
} from '@expo-google-fonts/montserrat-alternates';


const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  //Container = envolve toda a estrutura de navegacao
  //Navigator = componente para a navegacao
  //tela

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
  </NavigationContainer>
}