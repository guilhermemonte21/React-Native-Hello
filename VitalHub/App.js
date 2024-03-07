import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/navegacao/navegacao';
import { Login } from './src/screens/Login/Login';
import {
  useFonts,
  MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular
    
} from '@expo-google-fonts/montserrat-alternates';

import * as SplashScreen from "expo-splash-screen"
import { Text, View } from 'react-native';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { Perfil } from './src/screens/Perfil/Perfil';
import { PerfilMedico } from './src/screens/PerfilMedico/PerfilMedico';
import { InsercaoProntuario } from './src/screens/InsercaoProntuario/InsercaoProntuario';
import { Main } from './src/screens/Main/Main';

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
export default function App() {
  let [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular
    
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
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
      <Stack.Screen
        name='Main'
        component={Main}
      />
      
       <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{title: "RecuperarSenha"}}
        />
        <Stack.Screen
          name="VerificarEmail"
          component={VerificarEmail}
          options={{title: "VerificarEmail"}}
        />
        <Stack.Screen
          name="RedefinirSenha"
          component={RedefinirSenha}
          options={{title: "RedefinirSenha"}}
        />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{title: "CriarConta"}}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{title: "Perfil"}}
        />
        <Stack.Screen
          name="PerfilMedico"
          component={PerfilMedico}
          options={{title: "PerfilMedico"}}
        />
        <Stack.Screen
          name="InsercaoProntuario"
          component={InsercaoProntuario}
          options={{title: "InsercaoProntuario"}}
        />

    </Stack.Navigator>
  </NavigationContainer>)
}
